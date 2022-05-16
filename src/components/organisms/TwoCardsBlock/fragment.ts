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
