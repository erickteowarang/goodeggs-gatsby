import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { media } from '../../../theme/media';

type ContainerVariants = 'wide' | 'narrow' | 'tight' | 'full';

export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    variant?: ContainerVariants;
    customWidth?: string;
};

const getMaxWidth = (theme: DefaultTheme, variant?: ContainerVariants) => {
    if (variant) {
        switch (variant) {
            case 'wide':
                return theme.sizes.container;
            case 'narrow':
                return theme.sizes.narrow;
            case 'tight':
                return theme.sizes.tight;
            default:
                return theme.sizes.container;
        }
    }

    return theme.sizes.container;
};

const StyledContainer = styled.div<ContainerProps>`
    max-width: ${({ theme, variant, customWidth }) =>
        customWidth || getMaxWidth(theme, variant)};
    margin-left: auto;
    margin-right: auto;

    ${({ variant }) => {
        if (variant === 'full') {
            return css`
                padding: ${({ theme }) => theme.space[4]} 0;

                @media ${media.medium} {
                    padding: ${({ theme }) => theme.space[4]}
                        ${({ theme }) => theme.space[5]};
                }
            `;
        } else {
            return css`
                padding-left: ${({ theme }) => theme.space[4]};
                padding-right: ${({ theme }) => theme.space[4]};
            `;
        }
    }}
`;

const Container = ({
    children,
    className,
    variant,
    customWidth,
}: ContainerProps) => (
    <StyledContainer
        variant={variant}
        className={className}
        customWidth={customWidth}
    >
        {children}
    </StyledContainer>
);

export default Container;
