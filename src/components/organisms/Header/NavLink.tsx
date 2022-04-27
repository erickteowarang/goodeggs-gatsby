import React from 'react';
import styled from 'styled-components';
import Link, { LinkProps } from '../../atoms/Link';

const StyledNavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    }
`;

const NavLink = ({
    to,
    href,
    className,
    children,
}: LinkProps & {
    className?: string;
    children: React.ReactNode;
}) => (
    <StyledNavLink to={to} href={href} className={className}>
        {children}
    </StyledNavLink>
);

export default NavLink;
