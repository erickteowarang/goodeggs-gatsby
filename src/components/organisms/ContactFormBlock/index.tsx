import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/atoms/Container';
import { BlockHeading } from 'components/atoms/Typography';
import Form from 'components/molecules/Form';

import { CenteredContent } from 'components/generic';
import Spacing from 'components/atoms/Spacing';

type ContactFormBlockProps = {
  heading: string;
};

const ContactFormContainer = styled(Container)`
  background: ${props => props.theme.colors.altBackground};
  border-radius: 20px;
  padding: ${props => props.theme.space[6]} 0;
  margin-bottom: ${props => props.theme.space[5]};
`;

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
    <ContactFormContainer>
      {heading && (
        <CenteredContent>
          <BlockHeading>{heading}</BlockHeading>
          <Spacing size={5} />
        </CenteredContent>
      )}
      {wpGfForm.formFields && (
        <Form id={1} formFields={wpGfForm.formFields.nodes} />
      )}
    </ContactFormContainer>
  );
};

export default ContactFormBlock;
