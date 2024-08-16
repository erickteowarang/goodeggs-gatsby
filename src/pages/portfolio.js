import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/organisms/Layout';
import ContentFilter from 'components/organisms/ContentFilter';
import CardGrid from 'components/molecules/CardGrid';

const PortfolioItemPage = ({ serverData }) => {
  const [cards, setCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  console.log('serverData', serverData);

  // const getCategories = () => {
  //   let allCategories = ['All'];
  //   allPortfolioItem?.nodes?.forEach((node) => {
  //     node.categories.forEach((category) => {
  //       if (!allCategories.includes(category.name)) {
  //         allCategories.push(category.name);
  //       }
  //     });
  //   });

  //   return allCategories;
  // };

  // const getCards = () => {
  //   let allPortfolioItems = allPortfolioItem.nodes;
  //   if (activeFilter !== 'All') {
  //     allPortfolioItems = allPortfolioItems.filter((node) =>
  //       node.categories.some((category) => category.name === activeFilter)
  //     );
  //   }

  //   if (allPortfolioItems) {
  //     return allPortfolioItems?.map((node) => ({
  //       heading: node.title,
  //       content: node.excerpt,
  //       image: node.image,
  //       tags: node.categories.map((category) => category.name),
  //       link: node.uri,
  //     }));
  //   }
  // };

  // useEffect(() => {
  //   setCards(getCards());
  // }, [activeFilter]);

  return (
    <Layout
      title="Selected work"
      footerData={{
        backgroundColor: 'grey',
        footerCtaHeading: `Let's talk digital`,
      }}
    >
      {/* <ContentFilter
        heading="Selected work"
        filters={getCategories()}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      {cards?.length && (
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
        />
      )} */}
    </Layout>
  );
};

export default PortfolioItemPage;

export async function getServerData() {
  try {
    const res = await fetch('https://admin.thegoodeggs.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            {
              portfolioItems(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
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

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
