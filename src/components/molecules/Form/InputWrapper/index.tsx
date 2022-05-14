import React from 'react';
import styled, { css } from 'styled-components';

import Box from 'components/atoms/Box';
import Flex from 'components/atoms/Flex';

const InputLabel = styled.label<{ isFull?: boolean }>`
  ${({ isFull }) =>
    isFull
      ? css`
          font-family: ${({ theme }) => theme.fonts.heading};
          font-size: 22px;
          font-weight: bold;
          width: 45%;
        `
      : css``}
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
    <Flex variant={isFull ? 'spaceBetween' : 'column'} alignItems={!isFull ? 'start' : undefined} gap={isFull ? 3 : 2}>
      <Box width={isFull ? 'half' : 'full'}>
        <InputLabel
          isFull={isFull}
          htmlFor={labelFor}
          dangerouslySetInnerHTML={{ __html: joinedLabel }}
        />
      </Box>
      <Box width={isFull ? 'half' : 'full'}>
        {children}
        {errors && (
          <div
            aria-live="polite"
            className="gravityform__error_message gfield_description validation_message"
          >
            {errors.message}
          </div>
        )}
      </Box>
    </Flex>
  );
};

export default InputWrapper;
