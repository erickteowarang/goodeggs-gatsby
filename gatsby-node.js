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
                    const imageType = info.schema.getType('ImageSharp');
                    const file = context.nodeModel.getNodeById({
                        id: source.localFile,
                    });
                    if (!file) return null;
                    const image = context.nodeModel.getNodeById({
                        id: file.children[0],
                    });
                    const resolver =
                        imageType.getFields().gatsbyImageData.resolve;
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
    `);

    // WordPress types
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
    `);
};

setOptions({
    postTypes: ['Page'],
    graphQLFieldGroupName: 'pageModules',
    graphQLFieldName: 'components',
});

module.exports.createPages = async (gatsbyUtilities) => {
    await createPages(gatsbyUtilities);
    await createPosts(gatsbyUtilities);
};
