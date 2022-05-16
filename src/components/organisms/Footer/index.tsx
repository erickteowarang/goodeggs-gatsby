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

const CopyrightText = styled(Text)`
  color: ${({ theme }) => theme.colors.blockText};
  text-align: right;
  margin-top: ${({ theme }) => theme.space[4]};
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
          <Flex variant="columnStart" alignItems="end">
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
          </Flex>
        </FooterItemContainer>
      </Container>
    </Box>
  );
};

export default Footer;
