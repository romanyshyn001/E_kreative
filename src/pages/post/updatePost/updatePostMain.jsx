import React, { useState } from "react";
import { updatePostLoading } from "../../../redux/slices/article";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './../s.module.css'
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const {post, } = useSelector((state) => {
        return {
            // eslint-disable-next-line eqeqeq
            post: state.posts.post.find(p => p.id == params.id),
        }
    })
const [title, setTitle] = useState(post.title)
const [body, setBody] = useState(post.body)

const titleChange = (e) => {
    setTitle(e.target.value)
}
const bodyChange = (e) => {
    setBody(e.target.value)
}
console.log('post =>', post)
    const onSavePostClicked = () => {
        if (title && body) {
//.........ADD DATE.......//
          const options = {id: params.id, title: title, body: body}  
            dispatch(updatePostLoading(options))
            navigate('../')    
        }
      }
    const onCancelChange = () => {
      setTitle(post.title)
      setBody(post.body)
      navigate('../')    
    }


    return (
        <section className={s.secContainer}>
            
          <h2>Edit Post</h2>
          <form >
            <label htmlFor="postTitle">Post Title:</label>
            <input className={s.editTitle}
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={titleChange}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea className={s.editBody}
              id="postContent"
              name="postContent"
              value={body}
              onChange={bodyChange}
            />
          </form>
          <button className={s.btn} type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
          <button className={s.btn} type="button" onClick={onCancelChange}>
            Cancel
          </button>
        </section>
      )
}
export default UpdatePost