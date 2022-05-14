import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { graphql } from 'gatsby';

import InputWrapper from '../InputWrapper';

type InputProps = {
  defaultValue?: string;
  fieldData: {
    inputMaskValue?: string;
    maxLength?: number;
    placeholder?: string;
    isRequired: boolean;
    type: string;
    size?: string;
  };
  value?: string;
  name: string;
  wrapId: string;
};

const standardType = (type: string) => {
  switch (type) {
    case 'phone':
      return 'tel';
    case 'fileupload':
      return 'file';
    default:
      return type;
  }
};

const StyledInput = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #E3E5E5;
  border-radius: 5px;
  padding: 15px 12px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

const Input = ({ defaultValue, fieldData, name, wrapId }: InputProps) => {
  const { isRequired, maxLength, placeholder, type } = fieldData;

  let inputType = standardType(type);

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
      <StyledInput
        aria-invalid={Boolean(errors?.[name])}
        aria-required={isRequired}
        defaultValue={defaultValue}
        id={name}
        maxLength={maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
        placeholder={placeholder}
        {...register(name, {
          required: isRequired && 'This field is required',
          maxLength: {
            value: maxLength ? maxLength : 45,
            message: 'You have reached the character limit for this field',
          },
        })}
        type={inputType.toLowerCase()}
      />
    </InputWrapper>
  );
};

export default Input;

export const TextField = graphql`
  fragment TextField on WpTextField {
    defaultValue
    description
    descriptionPlacement
    errorMessage
    inputName
    isRequired
    label
    maxLength
    placeholder
    value
  }
`;

export const DateField = graphql`
  fragment DateField on WpDateField {
    adminLabel
    calendarIconType
    calendarIconUrl
    canPrepopulate
    cssClass
    dateFormat
    dateType
    defaultValue
    description
    descriptionPlacement
    errorMessage
    inputName
    inputs {
      customLabel
      defaultValue
      id
      label
      placeholder
    }
    isRequired
    label
    placeholder
    shouldAllowDuplicates
    subLabelPlacement
    value
  }
`;

export const EmailField = graphql`
  fragment EmailField on WpEmailField {
    adminLabel
    canPrepopulate
    cssClass
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    hasEmailConfirmation
    inputs {
      autocompleteAttribute
      customLabel
      defaultValue
      id
      label
      name
      placeholder
    }
    isRequired
    label
    placeholder
    shouldAllowDuplicates
    size
    subLabelPlacement
    value
  }
`;

export const HiddenField = graphql`
  fragment HiddenField on WpHiddenField {
    canPrepopulate
    defaultValue
    inputName
    label
    value
  }
`;

export const NumberField = graphql`
  fragment NumberField on WpNumberField {
    adminLabel
    autocompleteAttribute
    calculationFormula
    calculationRounding
    canPrepopulate
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isCalculation
    isRequired
    label
    numberFormat
    placeholder
    rangeMax
    rangeMin
    shouldAllowDuplicates
    size
    value
  }
`;

export const PhoneField = graphql`
  fragment PhoneField on WpPhoneField {
    adminLabel
    autocompleteAttribute
    canPrepopulate
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isRequired
    label
    phoneFormat
    placeholder
    shouldAllowDuplicates
    size
    value
  }
`;