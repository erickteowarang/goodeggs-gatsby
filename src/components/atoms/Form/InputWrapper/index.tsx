import React from "react";

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
    maxLength,
    type,
  },
  labelFor,
  wrapId
}: InputWrapperProps) => {
  console.log(label);
  const joinedLabel = `${label}${
    isRequired ? '<span class="gfield_required">*</span>' : ""
  }`;

  return (
    <li
      id={wrapId}
    >
      <label
        className="gravityform__label gfield_label"
        htmlFor={labelFor}
        dangerouslySetInnerHTML={{ __html: joinedLabel }}
      />
      <div>
        {children}
        {maxLength > 0 && (
          <div className="charleft ginput_counter warningTextareaInfo">
            {maxLengthSentence(maxLength, type)}
          </div>
        )}
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

const maxLengthSentence = (length: number, type: string) => {
  let word = type === "number" ? "numbers" : "characters";
  return length && ` (maximum ${length} ${word})`;
};

export default InputWrapper;