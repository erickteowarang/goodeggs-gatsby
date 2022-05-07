import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';
import ContentFilter from 'components/organisms/ContentFilter';
import CardGrid from 'components/molecules/CardGrid';

const PortfolioItemPage = (pageProps) => {
  const [cards, setCards] = useState([]);
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
  };

  const getCards = () => {
    const allPortfolioItems = allWpPortfolioItem.nodes;
    if (activeFilter === 'All') {
      return allPortfolioItems.map(node => ({
        heading: node.title,
        content: node.excerpt,
        image: node.featuredImage
      }));
    } else {
      return allPortfolioItems
        .filter(node => node.categories.nodes.forEach(category => category.name === activeFilter))
        .map(node => ({
          heading: node.title,
          content: node.excerpt,
          image: node.featuredImage
        }));
    }
  }

  useEffect(() => {
    setCards(getCards());
  }, [activeFilter]);

  return (
    <Layout title='Selected work' footerData={{
      backgroundColor: 'grey',
      footerCtaHeading: `Let's talk digital`,
    }}>
      <ContentFilter 
        heading="Selected work"
        filters={getCategories()}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      {cards.length && <CardGrid cards={cards} />}
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
              gatsbyImageData
              alt
              url
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
