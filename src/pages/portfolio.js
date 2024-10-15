import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from 'components/organisms/Layout';
import Section from 'components/atoms/Section';
import ContentFilter from 'components/organisms/ContentFilter';
import CardGrid from 'components/molecules/CardGrid';
import ClipLoader from 'react-spinners/ClipLoader';

const PortfolioItemPage = () => {
  const [cards, setCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [allPortfolioItem, setAllPortfolioItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      const data = await fetch('https://admin.thegoodeggcollective.com.au/graphql', {
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
      const portfolioItemData = json.data.portfolioItems;
      setAllPortfolioItem(portfolioItemData);
      const allCards = getCards(portfolioItemData);
      setCards(allCards);
      setIsLoading(false);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const LoaderContainer = styled.span`
    display: flex;
    justify-content: center;
  `;

  return (
    allPortfolioItem && (
      <Layout
        title="Selected work"
        footerData={{
          backgroundColor: 'grey',
          footerCtaHeading: `Let's talk digital`,
        }}
        seo={{
          "title": "Selected work - The Good Egg Collective - UX/UI design and development digital agency in Melbourne, Australia",
          "metaDesc": "We are a small team of designers and developers that help like-minded folk, companies, non-profits and entrepreneurs to innovate socially and environmentally responsible products that make a meaningful impact for the world.",
          "canonical": "https://thegoodeggcollective.com.au/portfolio",
          "schema": {
              "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://thegoodeggcollective.com.au/\",\"url\":\"https://thegoodeggcollective.com.au/\",\"name\":\"The Good Egg Collective - UX/UI design and development digital agency in Melbourne, Australia\",\"isPartOf\":{\"@id\":\"https://thegoodeggcollective.com.au/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\"},\"image\":{\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\"},\"thumbnailUrl\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"datePublished\":\"2022-02-25T17:35:36+00:00\",\"dateModified\":\"2024-10-14T05:39:35+00:00\",\"description\":\"We are a small team of designers and developers that help like-minded folk, companies, non-profits and entrepreneurs to innovate socially and environmentally responsible products that make a meaningful impact for the world.\",\"breadcrumb\":{\"@id\":\"https://thegoodeggcollective.com.au/#breadcrumb\"},\"inLanguage\":\"en-AU\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://thegoodeggcollective.com.au/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-AU\",\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\",\"url\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"contentUrl\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"width\":1235,\"height\":448},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://thegoodeggcollective.com.au/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://thegoodeggcollective.com.au/#website\",\"url\":\"https://thegoodeggcollective.com.au/\",\"name\":\"The Good Egg Collective\",\"description\":\"UX/UI design and development digital agency in Melbourne, Australia\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://thegoodeggcollective.com.au/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-AU\"}]}"
          }
        }}
      >
        {isLoading ? (
          <Section>
            <LoaderContainer>
              <ClipLoader color="#004ca3" loading={isLoading} />
            </LoaderContainer>
          </Section>
        ) : (
          <>
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
          </>
        )}
      </Layout>
    )
  );
};

export default PortfolioItemPage;
