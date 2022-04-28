import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteURL from 'is-absolute-url';

export type LinkProps = {
  to?: string;
  href?: string;
  children: string | ReactNode;
  className?: string;
};

const StyledLink = styled.a`
  color: inherit;
  display: inline-block;
  color: ${({ theme }) => theme.colors.linkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

const Link = ({ to, href, children, className, ...props }: LinkProps) => {
  const url = href || to || '';

  return (
    <StyledLink
      as={isAbsoluteURL(url) ? 'a' : GatsbyLink}
      href={url}
      className={className}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
