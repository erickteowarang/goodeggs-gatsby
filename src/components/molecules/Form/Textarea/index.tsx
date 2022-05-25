import React from 'react';
import { graphql } from 'gatsby';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import InputWrapper from '../InputWrapper';

type TextAreaProps = {
  fieldData: {
    description?: string;
    label: string;
    descriptionPlacement?: string;
    maxLength?: number;
    placeholder?: string;
    isRequired: boolean;
    defaultValue?: string;
  };
  name: string;
  wrapId: string;
};

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #e3e5e5;
  border-radius: 5px;
  min-height: 205px;
  padding: 15px 12px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-family: ${({ theme }) => theme.fonts.text};
`;

const Textarea = ({ fieldData, name, wrapId }: TextAreaProps) => {
  const { isRequired, maxLength, placeholder, defaultValue } = fieldData;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper
      errors={errors?.[name] || {}}
      inputData={fieldData}
      labelFor={name}
      wrapId={wrapId}
    >
      <StyledTextarea
        aria-invalid={Boolean(errors?.[name])}
        aria-required={isRequired}
        defaultValue={defaultValue}
        id={name}
        maxLength={maxLength && maxLength > 0 ? maxLength : undefined}
        placeholder={placeholder}
        {...register(name, {
          required: isRequired && 'This field is required',
        })}
      />
    </InputWrapper>
  );
};

export default Textarea;

export const TextAreaField = graphql`
  fragment TextAreaField on WpTextAreaField {
    adminLabel
    canPrepopulate
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    inputName
    isRequired
    label
    maxLength
    shouldAllowDuplicates
    placeholder
    size
    hasRichTextEditor
    value
  }
`;
