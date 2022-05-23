import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Menu, X } from 'react-feather';
import styled from 'styled-components';

import Container, { ContainerProps } from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Spacing from 'components/atoms/Spacing';
import { Logo } from 'components/atoms/Svg';
import NavLink from 'components/molecules/NavLink';
import { InteractiveIcon, VisuallyHidden } from 'components/generic';
import { media } from 'theme/media';
import { MenuItem } from 'types/global';

const DesktopNavWrapper = styled(Container)`
  position: relative;
  z-index: 1;
  display: none;

  @media ${media.small} {
    display: block;
    padding-top: ${({ theme }) => theme.space[4]};
  }
`;

const MobileNavWrapper = styled(Container)<
  ContainerProps & {
    isOpen?: boolean;
  }
>`
  display: block;
  position: relative;
  padding-top: ${({ theme }) => theme.space[3]};
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.primary : 'default'};

  @media ${media.small} {
    display: none;
  }
`;

const MobileNavOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding-top: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1;

  @media ${media.small} {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[4]};
`;

const MobileSVGColorWrapper = styled.span<{ isOpen?: boolean }>`
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.primary : theme.colors.background};
`;

export const headerHeight = '150px';

const StyledHeader = styled.header`
  position: absolute;
  height: ${headerHeight};
  width: 100%;
`;

const Header = ({ pageTitle }: { pageTitle: string }) => {
  const [isOpen, setOpen] = useState(false);

  const menuQuery = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(locations: { eq: PRIMARY }) {
        menuItems {
          nodes {
            id
            url
            label
          }
        }
      }
    }
  `);

  const { wpMenu } = menuQuery;

  const isPageActive = (linkLabel: string) => {
    return (linkLabel === pageTitle) || (pageTitle === 'Selected work' && linkLabel === 'Work');
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [isOpen]);

  return (
    <StyledHeader>
      <DesktopNavWrapper>
        <Spacing size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <Logo />
          </NavLink>
          <nav>
            <Flex list gap={4}>
              {wpMenu?.menuItems?.nodes.map((node: MenuItem) => (
                <li key={node.id}>
                  <NavLink to={node.url} isActive={isPageActive(node.label)}>{node.label}</NavLink>
                </li>
              ))}
            </Flex>
          </nav>
        </Flex>
      </DesktopNavWrapper>
      <MobileNavWrapper isOpen={isOpen}>
        <Spacing size={2} />
        <Flex variant="spaceBetween">
          <MobileSVGColorWrapper>
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <Logo />
            </NavLink>
          </MobileSVGColorWrapper>
          <Flex>
            <Spacing />
            <InteractiveIcon
              title="Toggle menu"
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </InteractiveIcon>
          </Flex>
        </Flex>
      </MobileNavWrapper>
      {isOpen && (
        <MobileNavOverlay>
          <nav>
            <Flex list responsive alignItems="stretch">
              {wpMenu?.menuItems?.nodes.map((navItem: MenuItem) => (
                <li key={navItem.id}>
                  <MobileNavLink to={navItem.url}>
                    {navItem.label}
                  </MobileNavLink>
                </li>
              ))}
            </Flex>
          </nav>
        </MobileNavOverlay>
      )}
    </StyledHeader>
  );
};

export default Header;
