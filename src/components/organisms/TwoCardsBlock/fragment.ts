module.exports = () => {
  return `
    heading
    blockContent
    cards {
      image: cardImage {
        id
        gatsbyImageData
        alt
        url
      }
      heading: cardHeading
      content: cardContent
    }
  `;
};
