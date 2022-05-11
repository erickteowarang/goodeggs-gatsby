import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';
import ContentFilter from 'components/organisms/ContentFilter';
import CardGrid from 'components/molecules/CardGrid';

const PortfolioItemPage = (pageProps) => {
  const [cards, setCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { allPortfolioItem } = pageProps.data;

  const getCategories = () => {
    let allCategories = ['All'];
    allPortfolioItem.nodes.forEach((node) => {
      node.categories.forEach((category) => {
        if (!allCategories.includes(category.name)) {
          allCategories.push(category.name);
        }
      });
    });

    return allCategories;
  };

  const getCards = () => {
    let allPortfolioItems = allPortfolioItem.nodes;
    if (activeFilter !== 'All') {
      allPortfolioItems = allPortfolioItems.filter((node) =>
        node.categories.some((category) => category.name === activeFilter)
      );
    }

    return allPortfolioItems.map((node) => ({
      heading: node.title,
      content: node.excerpt,
      image: node.image,
      tags: node.categories.map((category) => category.name),
    }));
  };

  useEffect(() => {
    setCards(getCards());
  }, [activeFilter]);

  return (
    <Layout
      title="Selected work"
      footerData={{
        backgroundColor: 'grey',
        footerCtaHeading: `Let's talk digital`,
      }}
    >
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
    allPortfolioItem {
      nodes {
        title
        excerpt
        image {
          id
          gatsbyImageData
          alt
          url
        }
        categories {
          name
        }
      }
    }
  }
`;
