import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogComments from "../components/blogComments"
import "./blog-post.css"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const slug = post.fields.slug.split("/post")[1]
  return (
    <Layout>
      <div className="blogpost">
        <h1 style={{}}>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "D MMMM YYYY")
      }
      fields {
        slug
      }
      html
      id
    }
  }
`
