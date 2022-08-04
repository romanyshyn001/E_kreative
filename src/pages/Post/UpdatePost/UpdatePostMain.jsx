import React, { useState } from "react";
import { updatePostLoading } from "../../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './UpdatePostMain.module.css'
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const navigate = useNavigate()

   const { posts } = useSelector((state) => {
      return {
            // eslint-disable-next-line eqeqeq
            posts: state.posts.posts.find(post => post.id == params.id),
      }
   })
   const [title, setTitle] = useState(posts.title)
   const [body, setBody] = useState(posts.body)

   const titleChange = (e) => {
      setTitle(e.target.value)
   }
   const bodyChange = (e) => {
      setBody(e.target.value)
   }
   const onSavePostClicked = () => {
      const updatedAt = new Date().toISOString()
         if (title && body) {
         const options = {id: params.id, title: title, body: body, updatedAt: updatedAt}  
            dispatch(updatePostLoading(options))  
            navigate('../')    
      }
   }
   const onCancelChange = () => {
      setTitle(posts.title)
      setBody(posts.body)
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
            <button className={s.btn} type="button" onClick={onSavePostClicked} disabled={title && body === '' }>
               Save Post
            </button>
            <button className={s.btn} type="button" onClick={onCancelChange}>
               Cancel
            </button>
         </section>
   )
}
export default UpdatePost
