import React from 'react';
import styled, { css } from 'styled-components';
import Link, { LinkProps } from 'components/atoms/Link';

const StyledNavLink = styled(Link)<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  text-transform: uppercase;
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.highlight};
    `};

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

const NavLink = ({
  to,
  href,
  className,
  children,
  isActive,
}: LinkProps & {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => (
  <StyledNavLink to={to} href={href} className={className} isActive={isActive}>
    {children}
  </StyledNavLink>
);

export default NavLink;
