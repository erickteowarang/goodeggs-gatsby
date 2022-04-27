// import * as React from "react"
// import { graphql } from "gatsby"
// import Layout from "components/organisms/Layout"
// import * as pageComponents from "components"

// const Fallback = (props) => {
//   console.warn(`No component found for: ${props.blocktype}`)
//   return false
// }

// const Page = (props) => {
//   const { page } = props.data
//   const { components } = page.pageModules

//   return (
//     <Layout {...homepage}>
//       {components.map((component, i) => {
//         const Component = pageComponents[component.__typename] || Fallback
//         return <Component key={component.id} index={i} {...component} />
//       })}
//     </Layout>
//   )
// }

// export default Page

// export const query = graphql`
//   query PageContent($id: String!) {
//     wpPage(id: { eq: $id }) {
//       title
//       slug
//       content
//       pageModules {
//         components {
//           __typename
//         }
//       }
//     }
//   }
// `
