import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';
import ContentFilter from 'components/organisms/ContentFilter';
import CardGrid from 'components/molecules/CardGrid';

const PortfolioItemPage = () => {
  const [cards, setCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [allPortfolioItem, setAllPortfolioItem] = useState([]);

  const getCategories = () => {
    let allCategories = ['All'];
    allPortfolioItem?.nodes?.forEach((node) => {
      node.categories.nodes.forEach((category) => {
        if (!allCategories.includes(category.name)) {
          allCategories.push(category.name);
        }
      });
    });

    return allCategories;
  };

  const getCards = (allPortfolioItemNodes) => {
    let allPortfolioItems = allPortfolioItemNodes.nodes;
    if (activeFilter !== 'All') {
      allPortfolioItems = allPortfolioItems.filter((node) =>
        node.categories.nodes.some((category) => category.name === activeFilter)
      );
    }

    return allPortfolioItems?.map((node) => ({
      heading: node.title,
      content: node.excerpt,
      image: {
        url: node.featuredImage.node.sourceUrl,
        alt: node.featuredImage.node.altText,
        id: node.featuredImage.node.id,
      },
      tags: node.categories.nodes.map((category) => category.name),
      link: node.uri,
    }));
  };

  useEffect(() => {
    if (allPortfolioItem) {
      setCards(getCards(allPortfolioItem));
    }
  }, [activeFilter]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('https://admin.thegoodeggs.com.au/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
              {
                portfolioItems(first: 25, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
                  nodes {
                    title
                    excerpt
                    featuredImage {
                      node {
                        id
                        altText
                        sourceUrl
                      }
                    }
                    uri
                    categories {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
          `,
        }),
      });
      // convert the data to json
      const json = await data.json();

      // set state with the result
      const portfolioItemData = json.data;
      setAllPortfolioItem(portfolioItemData);
      const allCards = getCards(portfolioItemData);
      console.log('allCards', allCards);
      setCards(allCards);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    allPortfolioItem && (
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
        {cards && (
          <CardGrid
            cards={cards}
            flexStart
            imageStyles={{
              width: '100%',
              height: '500px',
              display: 'inline-block',
              verticalAlign: 'top',
              borderRadius: '20px',
            }}
            useImageSrc
          />
        )}
      </Layout>
    )
  );
};

export default PortfolioItemPage;
