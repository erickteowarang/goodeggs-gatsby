import React, { useState } from 'react';
import ReactSelect from 'react-select';
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
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const reactSelectOptions = choices.map(choice => ({
    value: choice.value,
    label: choice.text,
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: 48,
    }),
  }
  

  return (
    <InputWrapper
      errors={errors?.[name] || {}}
      inputData={fieldData}
      labelFor={name}
      wrapId={wrapId}
    >
      <ReactSelect
        aria-invalid={errors ? true : false}
        aria-required={isRequired}
        styles={customStyles}
        id={name}
        {...register(name, {
          required: isRequired && 'This field is required',
        })}
        isSearchable={false}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={reactSelectOptions}
      />
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
