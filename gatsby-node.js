/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * Based on: https://github.com/gatsbyjs/gatsby/blob/master/examples/using-wordpress/gatsby-node.js
 */
const createPosts = require('./create/createPosts');
const { setOptions, createPages } = require('./create/createPages');
const { getGatsbyImageResolver } = require('gatsby-plugin-image/graphql-utils');

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: 'wpImagePassthroughResolver',
    extend(options) {
      const { args } = getGatsbyImageResolver();
      return {
        args,
        async resolve(source, args, context, info) {
          if (source.mediaItemUrl.includes('svg')) {
            return null;
          }
          const imageType = info.schema.getType('ImageSharp');
          const file = context.nodeModel.getNodeById({
            id: source.localFile,
          });
          if (!file) return null;
          const image = context.nodeModel.getNodeById({
            id: file.children[0],
          });
          const resolver = imageType.getFields().gatsbyImageData.resolve;
          if (!resolver) return null;
          return await resolver(image, args, context, info);
        },
      };
    },
  });

  actions.createFieldExtension({
    name: 'wpRecursiveImage',
    extend(options) {
      return {
        async resolve(source, args, context, info) {
          return source;
        },
      };
    },
  });

  // interfaces
  actions.createTypes(/* GraphQL */ `
    interface GatsbyImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: JSON @wpImagePassthroughResolver
      image: GatsbyImage
      localFile: File
      url: String
    }

    interface GatsbyCTA implements Node {
      id: ID!
      target: String
      title: String
      url: String
    }
  `);

  // WordPress types and components
  actions.createTypes(/* GraphQL */ `
    type WpMediaItem implements Node & RemoteFile & GatsbyImage {
      id: ID!
      alt: String @proxy(from: "altText")
      altText: String
      gatsbyImageData: JSON @wpImagePassthroughResolver
      image: GatsbyImage @wpRecursiveImage
      localFile: File
      url: String @proxy(from: "mediaItemUrl")
      mediaItemUrl: String
    }

    type ServiceRendered implements Node {
      serviceType: String
    }

    type ContentBlock implements Node {
      blockHeading: String
      blockContent: String
      image: GatsbyImage @link
      imageLocation: String
    }

    type GridImage implements Node {
      image: GatsbyImage @link
    }

    type Hero implements Node {
      heading: String
      text: String
      image: GatsbyImage @link
      cta: GatsbyCTA
    }

    type ManifestoHero implements Node {
      heading: String
      subtitle: String
      image: GatsbyImage @link
    }

    type MainBanner implements Node {
      heading: String
      subtitle: String
      bannerImage: GatsbyImage @link
    }

    type ColourBanner implements Node {
      text: String
      imageLocation: String
      image: GatsbyImage @link
      backgroundColour: String
      cta: GatsbyCTA
    }

    type ThreeColumnTextImageBlock implements Node {
      heading: String
      mainContent: String
      servicesRendered: [ServiceRendered]
      blockImage: GatsbyImage @link
    }

    type ImageGridBlock implements Node {
      heading: String
      content: String
      gridImages: [GridImage]
    }

    type TwoColumnTextImageBlock implements Node {
      heading: String
      content: String
      image: GatsbyImage @link
    }

    type TwoColumnContentBlock implements Node {
      sectionBackground: String
      content: String
      contentBlocks: [ContentBlock]
    }

    type OurValuesBlock implements Node {
      heading: String
      values: String
      image: GatsbyImage @link
    }
  `);

  // pages
  actions.createTypes(/* GraphQL */ `
    type PortfolioItem implements Node {
      id: ID!
      databaseId: Int
      slug: String!
      title: String
      description: String
      excerpt: String
      image: GatsbyImage @link
      categories: [WpCategory] @link
      html: String
      uri: String
      publishDate: String
    }
  `)
};

exports.onCreateNode = ({
  node,
  actions,
  createNodeId,
}) => {
  if (!node.internal.type.includes("Wp")) return

  if (node.internal.type === "WpPortfolioItem") {
        actions.createNode({
          id: createNodeId(`${node.id} >>> PortfolioItem ${node.slug}`),
          internal: {
            type: "PortfolioItem",
            contentDigest: node.internal.contentDigest,
          },
          databaseId: node.databaseId,
          parent: node.id,
          slug: node.slug,
          title: node.title,
          excerpt: node.excerpt,
          image: node.featuredImage?.node?.id,
          categories: node.categories?.nodes?.map(category => category.id),
          html: node.content,
          uri: node.uri,
          publishDate: node.date,
        });
    }
  }

setOptions({
  postTypes: ['Page', 'PortfolioItem'],
  graphQLFieldGroupName: ['pageModules', 'portfolioPageModules'],
  graphQLFieldName: 'components',
});

module.exports.createPages = async (gatsbyUtilities) => {
  await createPages(gatsbyUtilities);
  await createPosts(gatsbyUtilities);
};
