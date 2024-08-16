import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import ClipLoader from 'react-spinners/ClipLoader';

import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Flex from 'components/atoms/Flex';
import { Heading, Text } from 'components/atoms/Typography';
import { CenteredContent } from 'components/generic';
import formatPayload from 'utils/formatPayload';
import FormBuilder from './FormBuilder';

type FormProps = {
  id: number;
  formFields: Array<{
    id: number;
    type: string;
    label: string;
    description?: string;
    choices?: {
      text: string;
      value: string;
    };
  }>;
};

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const LoaderContainer = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const Form = ({ id, formFields }: FormProps) => {
  const methods = useForm();
  const [submitForm, { loading }] = useMutation(SUBMIT_FORM);
  const [submissionError, setSubmissionError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitCallback = async (values: any) => {
    if (loading) return;

    setIsLoading(true);

    const formRes = formatPayload({
      serverData: formFields,
      clientData: values,
    });

    submitForm({
      variables: {
        formId: id,
        fieldValues: formRes,
      },
    })
      .then((data: any) => {
        // Success if no errors returned.
        setIsLoading(false);
        if (!Boolean(data?.submitGfForm?.errors?.length)) {
          setSubmissionSuccess(true);
        } else {
          setSubmissionError(data?.submitGfForm?.errors[0]);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setSubmissionError('Unknown Error');
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitCallback)}>
        <Container variant="tight">
          {submissionSuccess ? (
            <CenteredContent>
              <Heading>Your submission is successful</Heading>
              <Text>We'll reach out to you as soon as we can</Text>
            </CenteredContent>
          ) : (
            <Flex variant="spaceBetween">
              {submissionError && <ErrorMessage message={submissionError} />}
              <FormBuilder formFields={formFields} />
              <FormButtonContainer>
                <Button type="submit" variant="form">
                  Send
                </Button>
                {isLoading && (
                  <LoaderContainer>
                    <ClipLoader color="#004ca3" loading={isLoading} />
                  </LoaderContainer>
                )}
              </FormButtonContainer>
            </Flex>
          )}
        </Container>
      </form>
    </FormProvider>
  );
};

export default Form;

const SUBMIT_FORM = gql`
  mutation submitForm($formId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: { id: $formId, fieldValues: $fieldValues }) {
      errors {
        id
        message
      }
    }
  }
`;
