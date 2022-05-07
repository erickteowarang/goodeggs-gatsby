import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';

const PortfolioItemPage = (pageProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { allWpPortfolioItem } = pageProps.data;

  const getCategories = () => {
    let allCategories = [];
    allWpPortfolioItem.nodes.forEach(node => {
      node.categories.nodes.forEach(category => {
        if (!allCategories.includes(category.name)) {
          allCategories.push(category.name);
        }
      });
    });

    return allCategories;
  }
  
  

  return (
    <Layout title='Selected work' footerData={{
      backgroundColor: 'grey',
      footerCtaHeading: `Let's talk digital`,
    }}>
      {console.log(pageProps)}
    </Layout>
  );
};

export default PortfolioItemPage;

export const portfolioItemPageQuery = graphql`
  query PortfolioItemsQuery {
    allWpPortfolioItem {
      nodes {
        title
        excerpt
        featuredImage {
          node {
            id
            image {
              id
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
