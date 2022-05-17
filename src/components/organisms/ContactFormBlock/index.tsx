import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import { BlockHeading } from 'components/atoms/Typography';
import Form from 'components/molecules/Form';

import { theme } from 'theme/index';
import { CenteredContent } from 'components/generic';
import Spacing from 'components/atoms/Spacing';

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
            ...FileUploadField
          }
        }
      }
    }
  `);

  const { wpGfForm } = formData;

  return (
    <Section background={theme.colors.sectionBackground}>
      <Container>
        {heading && (
          <CenteredContent>
            <BlockHeading>{heading}</BlockHeading>
            <Spacing size={5} />
          </CenteredContent>
        )}
        {wpGfForm.formFields && <Form id={1} formFields={wpGfForm.formFields.nodes} />}
      </Container>
    </Section>
  );
};

export default ContactFormBlock;
