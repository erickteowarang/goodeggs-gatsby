exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "wpImagePassthroughResolver",
    extend(options) {
      return {
        async resolve(source, args, context, info) {
          const imageType = info.schema.getType("ImageSharp")
          const file = context.nodeModel.getNodeById({
            id: source.localFile,
          })
          if (!file) return null
          const image = context.nodeModel.getNodeById({
            id: file.children[0],
          })
          const resolver = imageType.getFields().gatsbyImageData.resolve
          if (!resolver) return null
          return await resolver(image, args, context, info)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "wpRecursiveImage",
    extend(options) {
      return {
        async resolve(source, args, context, info) {
          return source
        },
      }
    },
  })

  // interfaces
  // actions.createTypes(/* GraphQL */ `
  //   interface HomepageImage implements Node {
  //     id: ID!
  //     alt: String
  //     gatsbyImageData: JSON
  //     image: HomepageImage
  //     localFile: File
  //     url: String
  //   }

  //   interface HomepageBlock implements Node {
  //     id: ID!
  //     blockType: String
  //   }

  //   interface PageComponent implements Node {
  //     id: ID!
  //     componentType: String
  //   }
  // `)

  // // blocks
  // actions.createTypes(/* GraphQL */ `
  //   type HomepageLink implements Node {
  //     id: ID!
  //     href: String
  //     text: String
  //   }

  //   type CTA implements Node {
  //     target: String
  //     title: String
  //     url: String
  //   }

  //   type HomepageHero implements Node & HomepageBlock {
  //     id: ID!
  //     blockType: String
  //     heading: String!
  //     image: HomepageImage @link
  //     text: String
  //     cta: CTA
  //   }

  //   type TextBanner implements Node & PageComponent {
  //     id: ID!
  //     componentType: String
  //     text: String
  //     cta: CTA
  //   }
  // `)

  // // pages
  // actions.createTypes(/* GraphQL */ `
  //   type Homepage implements Node {
  //     id: ID!
  //     title: String
  //     description: String
  //     image: HomepageImage @link
  //     content: [HomepageBlock] @link
  //     components: [PageComponent] @link
  //   }

  //   type Page implements Node {
  //     id: ID!
  //     slug: String!
  //     title: String
  //     description: String
  //     image: HomepageImage @link
  //     html: String
  //     components: [PageComponent] @link
  //   }
  // `)

  // WordPress types
  // actions.createTypes(/* GraphQL */ `
  //   type WpMediaItem implements Node & HomepageImage {
  //     id: ID!
  //     alt: String @proxy(from: "altText")
  //     altText: String
  //     gatsbyImageData: JSON @wpImagePassthroughResolver
  //     image: HomepageImage @wpRecursiveImage
  //     localFile: File
  //     url: String @proxy(from: "mediaItemUrl")
  //     mediaItemUrl: String
  //   }
  // `)
}

// exports.onCreateNode = ({
//   node,
//   actions,
//   createNodeId,
// }) => {
//   if (!node.internal.type.includes("Wp")) return

//   if (node.internal.type === "WpPage") {
//     let nodeIDs = [];
//     node.pageModules.components.forEach(component => {
//       const componentName = component.fieldGroupName.substring(28);
//       actions.createNode({
//         ...component,
//         id: createNodeId(`${node.id} >>> ${componentName}`),
//         componentType: componentName,
//         internal: {
//           type: componentName,
//           contentDigest: node.internal.contentDigest,
//         },
//       });
//       nodeIDs.push({
//         id: createNodeId(`${node.id} >>> ${componentName}`)
//       })
//     });

//     switch (node.slug) {
//       case "homepage":
//         // prettier-ignore
//         const {
//           description,
//           hero
//         } = node.homepage

//         const blocks = {
//           hero: {
//             id: createNodeId(`${node.id} >>> HomepageHero`),
//             ...hero,
//             image: hero.image?.id,
//           },
//         }

//         actions.createNode({
//           ...blocks.hero,
//           blockType: "HomepageHero",
//           internal: {
//             type: "HomepageHero",
//             contentDigest: node.internal.contentDigest,
//           },
//         })

//         actions.createNode({
//           ...node.homepage,
//           id: createNodeId(`${node.id} >>> Homepage`),
//           internal: {
//             type: "Homepage",
//             contentDigest: node.internal.contentDigest,
//           },
//           parent: node.id,
//           title: node.title,
//           description,
//           image: node.featuredImage?.node?.id,
//           content: [
//             blocks.hero.id,
//           ],
//           components: nodeIDs,
//         })

//         break
//       default:
//         actions.createNode({
//           ...node.page,
//           id: createNodeId(`${node.id} >>> Page ${node.slug}`),
//           internal: {
//             type: "Page",
//             contentDigest: node.internal.contentDigest,
//           },
//           parent: node.id,
//           slug: node.slug,
//           title: node.title,
//           description: node.page?.description,
//           image: node.featuredImage?.node?.id,
//           html: node.content,
//           components: nodeIDs,
//         })
//         break
//     }
//   }
// }
