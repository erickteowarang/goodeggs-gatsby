import React from 'react';
import { graphql } from 'gatsby';

import { useFormContext } from 'react-hook-form';
import InputWrapper from 'components/atoms/Form/InputWrapper';

type SelectProps = {
  fieldData: {
    label: string;
    choices: Array<{
      isSelected?: boolean;
      text: string;
      value: string;
    }>;
    cssClass: string;
    isRequired: boolean;
    size: string;
  };
  name: string;
  wrapId: string;
};

const Select = ({ fieldData, name, wrapId }: SelectProps) => {
  const { choices, isRequired } = fieldData;

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
      <select
        aria-invalid={errors ? true : false}
        aria-required={isRequired}
        id={name}
        {...register(name, {
          required: isRequired && 'This field is required',
        })}
      >
        {choices.map(({ isSelected, text, value }, index) => {
          return (
            <option
              defaultValue={isSelected}
              key={`${name}-${index}`}
              value={value}
            >
              {text}
            </option>
          );
        })}
      </select>
    </InputWrapper>
  );
};

export default Select;

export const SelectField = graphql`
  fragment SelectField on WpSelectField {
    label
    description
    descriptionPlacement
    choices {
      isSelected
      text
      value
    }
    errorMessage
    inputName
    isRequired
    value
  }
`;
