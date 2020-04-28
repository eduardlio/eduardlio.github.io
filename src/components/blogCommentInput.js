import React, {useState,useEffect} from 'react'
const CommentInput = props => {
  const DEFAULT_INPUTS = { name: "", content: "" }
  const [comment, setComment] = useState(DEFAULT_INPUTS)
  const onSubmit = e => {
    e.preventDefault()
    props.onSubmit(comment).then(ok => {
      setComment(DEFAULT_INPUTS)
    })
  }
  const onContentChange = e => {
    setComment({ ...comment, content: e.currentTarget.value })
  }
  const onNameChange = e => {
    setComment({ ...comment, name: e.currentTarget.value })
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={comment.name}
        onChange={onNameChange}
        type="text"
      />
      <label htmlFor="content">Text</label>
      <input
        id="content"
        value={comment.content}
        onChange={onContentChange}
        type="text"
      />
      <button
        disabled={comment.name.length == 0 || comment.content.length == 0}
      >
        send
      </button>
    </form>
  )
}
export default CommentInput