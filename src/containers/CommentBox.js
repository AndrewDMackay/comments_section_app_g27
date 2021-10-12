
import React, {useState} from "react";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

    const [comments, setComments] = useState(
        [
          {
            id: 1,
            author: "Rick Henry",
            text: "React is such a great framework!"
          },
          {
            id: 2,
            author: "Valerie Gibson",
            text: "I'm dreaming in React..."
          }
        ]
      )

      const addComment = (submittedComment) => {
        submittedComment.id = Date.now()
        const copyComments = [...comments, submittedComment]
        setComments(copyComments)
      }

      // [...comments], makes a 'deep copy' of the comments sections, utilising 'spread', see above..


  return (
    <div className="comment-box">
        <CommentList comments={comments} />
        <CommentForm onCommentSubmit={(comment) => {addComment(comment)}}/>
    </div>
  );

}

export default CommentBox;

