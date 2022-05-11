import React from "react";
import styled from 'styled-components';

type InputWrapperProps = {
  children: React.ReactNode
  errors: any
  inputData: any
  labelFor: string
  wrapId: string
}

const InputWrapper = ({
  children,
  errors,
  inputData: {
    isRequired,
    label,
    type,
  },
  labelFor,
  wrapId
}: InputWrapperProps) => {
  const joinedLabel = `${label}${
    isRequired ? '<span class="gfield_required">*</span>' : ""
  }`;

  return (
    <li
      id={wrapId}
    >
      <label
        htmlFor={labelFor}
        dangerouslySetInnerHTML={{ __html: joinedLabel }}
      />
      <div>
        {children}
      </div>
      {errors && (
        <div
          aria-live="polite"
          className="gravityform__error_message gfield_description validation_message"
        >
          {errors.message}
        </div>
      )}
    </li>
  );
};

export default InputWrapper;