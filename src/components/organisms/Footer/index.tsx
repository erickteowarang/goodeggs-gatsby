import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Spacing from 'components/atoms/Spacing';
import { Text } from 'components/atoms/Typography';
import CtaBlock from 'components/organisms/CtaBlock';
import { theme } from 'theme/index';
import { media } from 'theme/media';
import { CTAProps } from 'types/global';

type FooterProps = {
  backgroundColor: string;
  footerCtaHeading: string;
  overrideCtaLink?: CTAProps;
  hideCtaBlock?: boolean;
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
  text-align: center;
  margin-top: ${({ theme }) => theme.space[4]};

  @media ${media.large} {
    text-align: left;
    margin-top: ${({ theme }) => theme.space[5]};
  }
`;

const Footer = ({
  backgroundColor,
  footerCtaHeading,
  overrideCtaLink,
  hideCtaBlock,
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
    }
  `);

  const { wp } = footerQuery;

  const getFooterBackground = () => {
    if (backgroundColor === 'grey') {
      return theme.colors.sectionBackground;
    }

    return '#FFFFFF';
  };

  return (
    <Box as="footer" background={getFooterBackground()}>
      <Container>
        {!hideCtaBlock && (
          <CtaBlock
            heading={footerCtaHeading}
            ctaLink={
              overrideCtaLink || {
                id: 'contact-page-link-footer',
                url: '/contact',
                title: 'Get in touch',
              }
            }
          />
        )}
        <FooterDivider />
        <FooterItemContainer
          variant="spaceBetween"
          alignItems="start"
          responsive
        >
          <Box width="48%">
            <Flex variant="spaceBetween">
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
            </Flex>
            <CopyrightText isSmall>
              {`© The Good Egg Collective ${new Date().getFullYear()}. All Rights Reserved.`}
            </CopyrightText>
          </Box>
          <Box width="48%">
            <Text isSmall>
              We acknowledge the Wurundjeri People as the Traditional Owners of
              the land on which we work and pay our respects to traditional
              custodians past, present and emerging.
            </Text>
            <Spacing size={4} />
          </Box>
        </FooterItemContainer>
      </Container>
    </Box>
  );
};

export default Footer;
