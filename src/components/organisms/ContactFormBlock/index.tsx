import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import { Heading } from 'components/atoms/Typography';
import Form from 'components/atoms/Form';

import { theme } from 'theme/index';

type ContactFormBlockProps = {
  heading: string;
};

const ContactFormBlock = ({ heading }: ContactFormBlockProps) => {
  const formData = useStaticQuery(graphql`
    query ContactFormQuery {
      wpGfForm(databaseId: { eq: 1 }) {
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
    <Section background={theme.colors.sectionBackground}>
      <Container>
        {heading && <Heading>{heading}</Heading>}
        {wpGfForm.formFields && <Form formFields={wpGfForm.formFields.nodes} />}
      </Container>
    </Section>
  );
};

export default ContactFormBlock;
