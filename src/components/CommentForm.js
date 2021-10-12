
import React, {useState} from "react";

const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // Any form validation..
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        if(!authorToSubmit || !textToSubmit){
            return
        }
        // Update the list of comments with the new comment..
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        })
        // Reset the form's input fields..
        setAuthor("")
        setText("")
    }

    return(
        <div className="comment-form">
            <h3>Add a comment:</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Your name.." value={author} onChange={handleAuthorChange}/>
                <input type="text" placeholder="Say something.." value={text} onChange={handleTextChange}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}


export default CommentForm;

