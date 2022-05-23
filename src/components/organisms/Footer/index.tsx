import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import { Text } from 'components/atoms/Typography';
import NavLink from 'components/molecules/NavLink';
import CtaBlock from 'components/organisms/CtaBlock';
import { theme } from 'theme/index';
import { media } from 'theme/media';
import { CTAProps, MenuItem } from 'types/global';

type FooterProps = {
  backgroundColor: string;
  footerCtaHeading: string;
  overrideCtaLink?: CTAProps;
};

const FooterDivider = styled.hr`
  height: 1px;
  background: #eeeeee;
  border: none;
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

const FooterLineItem = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blockText};

  a {
    color: inherit;
  }
`;

const FooterItemContainer = styled(Flex)`
  padding-bottom: ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.colors.blockText};
  line-height: 2;
`;

const FooterMenuContainer = styled(Flex)`
  margin-top: ${({ theme }) => theme.space[3]}; 
  align-items: center;

  @media ${media.large} {
    margin-top: 0;
    align-items: flex-end;
  }
`;

const CopyrightText = styled(Text)`
  color: ${({ theme }) => theme.colors.blockText};
  text-align: center;
  margin-top: ${({ theme }) => theme.space[3]};

  @media ${media.large} {
    text-align: right;
    margin-top: ${({ theme }) => theme.space[4]};
  }
`;

const replaceLineBreaks = (mainString: string) => {
  return mainString.split('\n').map((item, idx) => {
    return (
      <FooterLineItem key={idx}>
        {item}
        <br />
      </FooterLineItem>
    );
  });
};

const Footer = ({
  backgroundColor,
  footerCtaHeading,
  overrideCtaLink,
}: FooterProps) => {
  const footerQuery = useStaticQuery(graphql`
    query FooterQuery {
      wp {
        contactDetails {
          companyContactDetails {
            address
            email
            phoneNumber
          }
        }
      }
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

  const { wp, wpMenu } = footerQuery;

  const getFooterBackground = () => {
    if (backgroundColor === 'grey') {
      return theme.colors.sectionBackground;
    }

    return '#FFFFFF';
  };

  return (
    <Box as="footer" background={getFooterBackground()}>
      <Container>
        <CtaBlock
          heading={footerCtaHeading}
          ctaLink={
            overrideCtaLink || {
              id: 'contact-page-link-footer',
              url: '/contact-us',
              title: 'Contact us',
            }
          }
        />
        <FooterDivider />
        <FooterItemContainer
          variant="spaceBetween"
          alignItems="start"
          responsive
        >
          <div>
            {replaceLineBreaks(wp.contactDetails.companyContactDetails.address)}
          </div>
          <div>
            <FooterLineItem>
              <a
                href={`tel:${wp.contactDetails.companyContactDetails.phoneNumber}`}
              >
                {wp.contactDetails.companyContactDetails.phoneNumber}
              </a>
            </FooterLineItem>
            <FooterLineItem>
              <a
                href={`mailto:${wp.contactDetails.companyContactDetails.email}`}
              >
                {wp.contactDetails.companyContactDetails.email}
              </a>
            </FooterLineItem>
          </div>
          <FooterMenuContainer variant="columnStart">
            <Flex list marginY={3}>
              {wpMenu?.menuItems?.nodes.map((node: MenuItem) => (
                <li key={node.id}>
                  <NavLink to={node.url}>{node.label}</NavLink>
                </li>
              ))}
            </Flex>
            <CopyrightText isSmall>
              {`© The Good Egg Collective ${new Date().getFullYear()}. All Rights Reserved.`}
            </CopyrightText>
          </FooterMenuContainer>
        </FooterItemContainer>
      </Container>
    </Box>
  );
};

export default Footer;
