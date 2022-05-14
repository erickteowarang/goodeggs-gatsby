import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import FormBuilder from './FormBuilder';

type FormProps = {
  formFields: Array<{
    label: string;
    description?: string;
    choices?: {
      text: string;
      value: string;
    };
  }>;
};

const FormButtonContainer = styled.div`
  margin-left: auto;
`

const Form = ({ formFields }: FormProps) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(methods.formState.isDirty); // make sure formState is read before render to enable the Proxy

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container variant='tight'>
          <Flex variant='spaceBetween'>
            <FormBuilder formFields={formFields} />
            <FormButtonContainer>
              <Button type="submit" variant='form'>
                Send
              </Button>
            </FormButtonContainer>
          </Flex>
        </Container>
      </form>
    </FormProvider>
  );
};

export default Form;
