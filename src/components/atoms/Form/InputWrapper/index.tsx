import React from 'react';
import styled, { css } from 'styled-components';

import Flex from 'components/atoms/Flex';
import Box from 'components/atoms/Box';

const InputLabel = styled.label<{ isSelect?: boolean }>`
  ${({ isSelect }) =>
    isSelect
      ? css`
          font-family: ${({ theme }) => theme.fonts.heading};
          font-size: ${({ theme }) => theme.fontSizes[4]};
          font-weight: bold;
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
  wrapId,
}: InputWrapperProps) => {
  const joinedLabel = `${label}${
    isRequired ? '<span class="gfield_required">*</span>' : ''
  }`;

  const isSelect = type === 'SELECT';

  return (
    <Flex variant={isSelect ? 'spaceBetween' : 'column'} alignItems='start'>
      <InputLabel
        isSelect={isSelect}
        htmlFor={labelFor}
        dangerouslySetInnerHTML={{ __html: joinedLabel }}
      />
      <div>{children}</div>
      {errors && (
        <div
          aria-live="polite"
          className="gravityform__error_message gfield_description validation_message"
        >
          {errors.message}
        </div>
      )}
    </Flex>
  );
};

export default InputWrapper;
