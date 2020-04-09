import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const result = useStaticQuery(graphql`
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
  `)
  console.log(result)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>All me posts</h1>
      <p>All {result.allMarkdownRemark.totalCount} of them</p>
      {result.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div className="post-item">
            <div
              className="post-item-header"
              key={node.id}
              style={{
                marginBottom: `0.3rem`,
              }}
            >
              <h2 style={{ marginBottom: `0.3rem` }}>
                <Link
                  to={node.fields.slug}
                  style={{
                    textDecoration: `none`,
                    color: `#DFAAD3`,
                  }}
                >
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>posted on {node.frontmatter.date}</p>
            </div>
            <p className="post-item-excerpt">{node.excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
