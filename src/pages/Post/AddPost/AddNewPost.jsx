import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addPostLoading } from "../../../redux/slices/posts";
import s from './AddNewPost.module.css'

const AddPost = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(window.localStorage.getItem('user'));

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addTitle = (e) => {
      setTitle(e.target.value)
  }
  const addBody = (e) => {
      setBody(e.target.value)
  }

  const onSavePostClicked = () => {
    const createdAt = new Date().toISOString()
      if (title && body) {
        const options = { title: title, body: body, userId: user.id, createdAt: createdAt}
          dispatch(addPostLoading(options))
          setTitle('')
          setBody('')
    }
  }

    
    return (
        <section >
            
          <h2>What's on your mind?</h2>
          <form >
            <label htmlFor="postTitle">Post Title:</label>
            <input className={s.postTitle}              
              type="text"
              id="postTitle"
              name="postTitle"
              onChange={addTitle}
              value={title}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea className={s.textInput}
              id="postContent"
              name="postContent"
              onChange={addBody}
              value={body}
            />
          </form>
          <button className={s.btn} type="button" onClick={onSavePostClicked}>
            Add post
          </button>
          
        </section>
    )
}
export default AddPost;
