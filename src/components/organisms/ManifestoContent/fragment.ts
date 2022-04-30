module.exports = () => {
  return `
    content
    nextPageLink {
      ... on WpPage {
        title
        link
      }
    }
  `;
};
