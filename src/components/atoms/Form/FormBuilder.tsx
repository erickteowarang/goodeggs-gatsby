import React from "react";

import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

type FormBuilderProps = {
  databaseId: number
  formFields: Array<{
    field: any
  }>
  formLoading: boolean
  presetValues: any
}

const FormBuilder = ({
  databaseId,
  formFields,
  presetValues,
}: FormBuilderProps) => {
  // Loop through fields and create
  return formFields.map((field: any) => {
    // Set the wrapper classes
    const {
      id,
      type,
    } = field;

    const wrapId = `field_${databaseId}_${id}`;

    //TODO: Should this match GF version "input_form.id_input.id"
    const inputName = `input_${id}`;

    const defaultValue = presetValues?.[inputName] || field?.defaultValue || "";

    switch (type) {
      // Start with the standard fields
      case "TEXT":
      case "NUMBER":
      case "EMAIL":
      case "HIDDEN":
      case "DATE":
      case "PHONE":
        return (
          <Input
            fieldData={field}
            key={id}
            name={inputName}
            defaultValue={defaultValue}
            wrapId={wrapId}
          />
        );
    case "TEXTAREA":
      return (
        <Textarea
          fieldData={field}
          key={id}
          name={inputName}
          wrapId={wrapId}
        />
      );
      case "SELECT":
        return (
          <Select
            fieldData={field}
            key={id}
            name={inputName}
            wrapId={wrapId}
          />
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
        return null;
    }
  });
};

export default FormBuilder;