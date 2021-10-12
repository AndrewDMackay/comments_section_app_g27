
import React from "react";

import Comment from './Comment'

const CommentList = ({comments}) => {

    const commentNodes = comments.map((comment) => {
        return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    })

  return (
      <div className="comment-list">
        <h2>Comments</h2>
        {commentNodes}
      </div>
  )

}

export default CommentList;