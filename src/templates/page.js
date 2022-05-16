import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = (pageProps) => {
  const accessor = Object.keys(pageProps.data)[0];

  let components;
  // ### COMPONENTS VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  components = components.map((component) => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    };
  });

  return (
    <Layout
      title={pageProps.data[accessor].title}
      url={pageProps.data[accessor].uri}
      footerData={pageProps.data[accessor].footerFields}
    >
      {components.map((component, index) => {
        // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div>Error: The component {component.name} was not found</div>;
      })}
    </Layout>
  );
};

export default PageTemplate;

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###
