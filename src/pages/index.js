import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import * as sections from "../components/Sections/sections"

const Fallback = (props) => {
  console.warn(`No component found for: ${props.blocktype}`)
  return false
}

export default function Homepage(props) {
  const { homepage } = props.data
  console.log(homepage);

  return (
    <Layout {...homepage}>
      {homepage.blocks.map((block, i) => {
        const Component = sections[block.blocktype] || Fallback
        return <Component key={block.id} index={i} {...block} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
      }
    }
  }
`
