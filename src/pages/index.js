import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import BlogPostItem from "../components/blogpostitem"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>All me posts</h1>
      <p>All {data.all.totalCount} of them</p>
      {data.all.edges.map(({ node }) => {
        return <BlogPostItem node={node} />
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query AllQUery {
    all: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
    pinned: allMarkdownRemark(filter: { frontmatter: { tags: { in: "pinned" } } }) {
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
