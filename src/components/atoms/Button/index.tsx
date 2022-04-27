import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link';

type ButtonVariantTypes = 'primary' | 'inverted' | 'link';

type ButtonProps = {
  variant?: ButtonVariantTypes;
  url?: string;
  isLink?: boolean;
  children: ReactNode;
};

const getButtonVariants = (variant: ButtonVariantTypes) => {
  switch (variant) {
    case 'primary':
      return css`
        color: white;
        background-color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.primary};
          background-color: white;
        }
      `;
    case 'inverted':
      return css`
        color: ${({ theme }) => theme.colors.primary};
        background-color: white;
        border: 2px solid white;

        &:hover,
        &:focus {
          color: white;
          background-color: ${({ theme }) => theme.colors.primary};
        }
      `;
    case 'link':
      return css`
        color: inherit;
        background-color: transparent;

        &::hover,
        &:focus {
          background-color: ${({ theme }) => theme.colors.muted};
        }
      `;
    default:
      break;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights.solid};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  transition: all 0.2s ease-out;

  ${({ variant }) => variant && getButtonVariants(variant)};
`;

const Button = ({
  variant = 'primary',
  children,
  url,
  isLink,
}: ButtonProps) => (
  <StyledButton variant={variant} href={url} as={isLink ? Link : 'button'}>
    {children}
  </StyledButton>
);

export default Button;
