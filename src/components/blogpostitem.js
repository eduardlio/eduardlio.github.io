import React from "react"
import { Link } from 'gatsby'
export default ({ node }) => (
  <div className="post-item" style={{ marginBottom: `2.2rem` }}>
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
      <p style={{marginBottom: `10px`, color: `#aaa`}}>posted on {node.frontmatter.date}</p>
    </div>
    <p className="post-item-excerpt">{node.excerpt}</p>
  </div>
)
