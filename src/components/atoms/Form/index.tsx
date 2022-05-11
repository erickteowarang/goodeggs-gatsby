import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormBuilder from "./FormBuilder";

type FormProps = {
  formFields: Array<{
    label: string
    description?: string
    choices?: {
      text: string
      value: string
    }
  }>
}

const Form = ({ formFields }: FormProps) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(methods.formState.isDirty); // make sure formState is read before render to enable the Proxy

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormBuilder formFields={formFields} />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default Form;