import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogPostItem from '../components/blogpostitem'
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>All me posts</h1>
      <p>All {data.allMarkdownRemark.totalCount} of them</p>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <BlogPostItem node={node}/>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "D MMMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
