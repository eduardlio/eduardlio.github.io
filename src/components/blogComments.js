import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import css from '@emotion/core'

import CommentInput from "./blogCommentInput"
const baseURL = "http://localhost:5000/api"

// "https://cors-anywhere.herokuapp.com/https://eduardlio-blog-comments.herokuapp.com/api/comments"
const BlogComments = props => {
  const { slug } = props
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch(`${baseURL}/comments${slug}`)
      .then(i => i.json())
      .then(fetched => {
        setComments(
          fetched.comments.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
              return 1
            } else {
              return -1
            }
          })
        )
      })
  }, [])
  const onSubmit = comment => {
    return fetch(`${baseURL}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: comment.name,
        content: comment.content,
        slug: slug.replace(/\//g, ""),
      }),
    })
      .then(i => i.json())
      .then(done => {
        setComments([...comments, done.comment])
        return done
      })
  }
  return (
    <>
      <h2>Comments:</h2>
      {comments.length > 0 ? (
        comments.map(comment => {
          return (
            <div key={comment.id} style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '0.8rem auto',
			}}>
              <p style={{margin: 0}}>{comment.content}</p>
              <p style={{margin: 0}}>
                by: {comment.name} at{" "}
                {new Date(comment.updatedAt).toLocaleString("en-AU")}
              </p>
            </div>
          )
        })
      ) : (
        <p>nothing here yet!</p>
      )}
      <CommentInput onSubmit={onSubmit} />
    </>
  )
}

BlogComments.propTypes = {
  slug: PropTypes.string,
}
export default BlogComments
