import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { graphql } from 'gatsby';

import InputWrapper from '../InputWrapper';

type FileUploadProps = {
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

const StyledFileInput = styled.input`
  display: none;
`

const FileUploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  content: 'Browse files';
  color: #72777A;
  -webkit-user-select: none;
  cursor: pointer;
  border: 1px dotted #72777A;
`

const FileUpload = ({ fieldData, name, wrapId }: FileUploadProps) => {
  const { isRequired, placeholder } = fieldData;

  const [fileLabel, setFileLabel] = useState('Browse files');

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files[0];
    setFileLabel(fileUploaded.name);
  };

  return (
    <InputWrapper
      errors={errors?.[name] || {}}
      inputData={fieldData}
      labelFor={name}
      wrapId={wrapId}
    >
      <FileUploadButton onClick={handleClick}>
        {fileLabel}
      </FileUploadButton>
      <StyledFileInput
        aria-invalid={Boolean(errors?.[name])}
        aria-required={isRequired}
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: isRequired && 'This field is required'
        })}
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default FileUpload;

export const FileUploadField = graphql`
  fragment FileUploadField on WpFileUploadField {
    id
    label
    type
    isRequired
    errorMessage
  }
`;