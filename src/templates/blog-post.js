import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-post">
          <h1 style={{
              color: `#DFAAD3`
          }} >{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div
          className="blog-postcontent"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export default BlogPost
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      id
    }
  }
`
