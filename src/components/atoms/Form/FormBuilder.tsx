import React from 'react';

import Box from 'components/atoms/Box';

import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

type FormBuilderProps = {
  databaseId: number;
  formFields: Array<{
    field: any;
  }>;
  formLoading: boolean;
  presetValues: any;
};

const FormBuilder: Function = ({
  databaseId,
  formFields,
  presetValues,
}: FormBuilderProps) => {
  // Loop through fields and create
  return formFields.map((field: any) => {
    // Set the wrapper classes
    const { id, type } = field;

    const wrapId = `field_${databaseId}_${id}`;

    //TODO: Should this match GF version "input_form.id_input.id"
    const inputName = `input_${id}`;

    const defaultValue = presetValues?.[inputName] || field?.defaultValue || '';

    switch (type) {
      // Start with the standard fields
      case 'TEXT':
      case 'NUMBER':
      case 'EMAIL':
      case 'HIDDEN':
      case 'DATE':
      case 'PHONE':
        return (
          <Box width='half'>
            <Input
              fieldData={field}
              key={id}
              name={inputName}
              defaultValue={defaultValue}
              wrapId={wrapId}
            />
          </Box>
        );
      case 'TEXTAREA':
        return (
          <Box width='full'>
            <Textarea
              fieldData={field}
              key={id}
              name={inputName}
              wrapId={wrapId}
            />
          </Box>
        );
      case 'SELECT':
        return (
          <Box width='full'>
            <Select fieldData={field} key={id} name={inputName} wrapId={wrapId} />
          </Box>
        );
      // case "FILEUPLOAD":
      //   return (
      //     <SelectorList
      //       fieldData={field}
      //       key={id}
      //       gfId={id}
      //       name={inputName}
      //       wrapId={wrapId}
      //     />
      //   );

      default:
        return <></>;
    }
  });
};

export default FormBuilder;
