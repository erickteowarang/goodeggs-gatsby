import React from 'react';
import styled, { css } from 'styled-components';

import Box from 'components/atoms/Box';
import Flex from 'components/atoms/Flex';
import { media } from 'theme/media';

const InputLabel = styled.label<{ isFull?: boolean }>`
  ${({ isFull }) =>
    isFull
      ? css`
          font-family: ${({ theme }) => theme.fonts.heading};
          font-size: 18px;
          font-weight: bold;
          width: 45%;

          @media ${media.medium} {
            font-size: 22px;
          }
        `
      : css``}
`;

const ErrorMessageContainer = styled.span`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  position: absolute;
  left: 0;
  bottom: -${({ theme }) => theme.fontSizes[4]};
`;

type InputWrapperProps = {
  children: React.ReactNode;
  errors: any;
  inputData: any;
  labelFor: string;
  wrapId: string;
};

const InputWrapper = ({
  children,
  errors,
  inputData: { isRequired, label, type },
  labelFor,
}: InputWrapperProps) => {
  const joinedLabel = `${label}${
    isRequired ? '<span class="gfield_required">*</span>' : ''
  }`;

  const isFull = type === 'SELECT' || type === 'FILEUPLOAD';

  return (
    <Flex
      variant={isFull ? 'spaceBetween' : 'column'}
      alignItems={!isFull ? 'start' : undefined}
      gap={isFull ? 3 : 2}
    >
      <Box width={isFull ? 'half' : 'full'}>
        <InputLabel
          isFull={isFull}
          htmlFor={labelFor}
          dangerouslySetInnerHTML={{ __html: joinedLabel }}
        />
      </Box>
      <Box width={isFull ? 'half' : 'full'} relative>
        {children}
        {errors && (
          <ErrorMessageContainer aria-live="polite">
            {errors.message}
          </ErrorMessageContainer>
        )}
      </Box>
    </Flex>
  );
};

export default InputWrapper;
