import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';

import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import formatPayload from 'utils/formatPayload';
import FormBuilder from './FormBuilder';

type FormProps = {
  id: number
  formFields: Array<{
    id: number
    type: string
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

const Form = ({ id, formFields }: FormProps) => {
  const methods = useForm();
  const [submitForm, { data: submissionData, loading }] = useMutation(SUBMIT_FORM);
  const [submissionError, setSubmissionError] = useState('');
  const hasBeenSubmitted = Boolean(submissionData?.submitGfForm);
  const haveFieldErrors = Boolean(submissionData?.submitGfForm?.errors?.length);
  const wasSuccessfullySubmitted = hasBeenSubmitted && !haveFieldErrors;

  const onSubmitCallback = async (values: any) => {
    if (loading) return;

    const formRes = formatPayload({
      serverData: formFields,
      clientData: values,
    });

    submitForm({
      variables: {
        formId: id,
        fieldValues: formRes,
      }
    }).then((data) => {
        console.log(data);
        // Success if no errors returned.
        console.log('here');
      }
    )
    .catch((error) => {
      console.error(error);
      setSubmissionError("unknownError");
    });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitCallback)}>
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

const SUBMIT_FORM = gql`
  mutation submitForm($formId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: {
      id: $formId
      fieldValues: $fieldValues
    }) {
      errors {
        id
        message
      }
    }
  }
`;