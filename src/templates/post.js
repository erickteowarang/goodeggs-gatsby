import React from 'react';
import { graphql } from 'gatsby';
import { combineFields } from 'utils';

const PostTemplate = (pageProps) => {
  const data = combineFields(pageProps.data.wpPost, 'post');
  return (
    <>
      <p>This is a post</p>
      {console.log(data)}
    </>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      date
      content
    }
  }
`;
