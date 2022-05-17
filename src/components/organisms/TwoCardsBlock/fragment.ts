module.exports = () => {
  return `
    heading
    blockContent
    cards {
      portfolioItem {
        ... on WpPortfolioItem {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              id
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  `;
};
