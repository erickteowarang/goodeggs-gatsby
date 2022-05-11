import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { Text, Heading } from 'components/atoms/Typography';
import Form from 'components/atoms/Form';

type ContactFormBlockProps = {
  heading: string
};

const ContactFormBlock = ({ heading }: ContactFormBlockProps) => {
  const formData = useStaticQuery(graphql`
    query ContactFormQuery {
      wpGfForm(databaseId: {eq: 1}) {
        formFields {
          nodes {
            id
            type
            ...TextField
            ...SelectField
            ...EmailField
            ...PhoneField
            ...TextAreaField
          }
        }
      }
    }
  `);

  console.log(formData);
  const { wpGfForm } = formData;

  return (
      <Section>
        <Container>
          {heading && <Heading>{heading}</Heading>}
          {wpGfForm.formFields && <Form formFields={wpGfForm.formFields.nodes} />}
        </Container>
      </Section>
    );
  }

export default ContactFormBlock;
