import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Spacing from 'components/atoms/Spacing';
import { Text } from 'components/atoms/Typography';
import NavLink from 'components/molecules/NavLink';
import CtaBlock from 'components/organisms/CtaBlock';
import { theme } from 'theme/index';
import { CTAProps, MenuItem } from 'types/global';

type FooterProps = {
  backgroundColor: string
  footerCtaHeading: string
  overrideCtaLink?: CTAProps
}

const FooterDivider = styled.hr`
  height: 1px;
  background: #EEEEEE;
  border: none;
  margin-bottom: ${({ theme }) => theme.space[5]};
`

const FooterLineItem = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blockText};

  a {
    color: inherit;
  }
`

const FooterItemContainer = styled(Flex)`
  padding-bottom: ${({ theme }) => theme.space[7]};
  color: ${({ theme }) => theme.colors.blockText};
`

const CopyrightText = styled(Text)`
  color: ${({ theme }) => theme.colors.blockText};
  text-align: right;
  margin: -${({ theme }) => theme.space[6]} -5px ${({ theme }) => theme.space[6]} 0;
`

const replaceLineBreaks = (mainString: string) => {
  return mainString.split("\n").map((item, idx) => {
    return (
        <FooterLineItem key={idx}>
          {item}
          <br/>
        </FooterLineItem>
     )
  })
}

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
      wpMenu(locations: {eq: MENU_1}) {
        menuItems {
          nodes {
            id
            path
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
  }

  return (
    <Box as="footer" background={getFooterBackground()}>
      <Container>
        <CtaBlock 
          heading={footerCtaHeading}
          ctaLink={overrideCtaLink || {
            id: "contact-page-link-footer",
            url: "/contact-us",
            title: "Contact us",
          }}
        />
        <FooterDivider />
        <FooterItemContainer variant="spaceBetween" responsive>
          <div>
            {replaceLineBreaks(wp.contactDetails.companyContactDetails.address)}
          </div>
          <div>
            <FooterLineItem>
              {wp.contactDetails.companyContactDetails.phoneNumber}
            </FooterLineItem>
            <FooterLineItem>
              {wp.contactDetails.companyContactDetails.email}
            </FooterLineItem>
          </div>
          <Flex variant='columnStart' alignItems='end'>
            <Flex list>
              {
              wpMenu?.menuItems?.nodes.map((node: MenuItem) => (
                <li key={node.id}>
                  <NavLink to={node.path}>{node.label}</NavLink>
                </li>
              ))}
            </Flex>
          </Flex>
        </FooterItemContainer>
        <CopyrightText isSmall>
          {`© The Good Egg Collective ${new Date().getFullYear()}. All Rights Reserved.`}
        </CopyrightText>
      </Container>
      <Spacing size={3} />
    </Box>
  );
};

export default Footer;