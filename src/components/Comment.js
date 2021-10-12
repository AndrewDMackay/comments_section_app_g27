
import React from "react";

const Comment = ({author, children}) => {

  return (
    <div className="comment">
        <h4>{children}</h4>
        <p>{author}</p>	
    </div>
  )

}

export default Comment;