import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import Layout from "../components/layout"

const Wrapper = styled.div``
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Global
          styles={css`
            h1 {
              color: #dfaad3;
            }
            li {
              margin-bottom: 0.3rem;
            }
          `}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
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
      html
      id
    }
  }
`
