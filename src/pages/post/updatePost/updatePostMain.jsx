import React, { useState } from "react";
import { updatePostLoading } from "../../../redux/slices/article";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './../s.module.css'
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const user = JSON.parse(window.localStorage.getItem('user'));
    const navigate = useNavigate()

    const {post, posts} = useSelector((state) => {
        return {
            // eslint-disable-next-line eqeqeq
            post: state.posts.post.find(p => p.id == params.id),
            posts: state.posts.post
        }
    })
console.log('posts =>', posts)
const [title, setTitle] = useState(post.title)
const [body, setBody] = useState(post.body)

const titleChange = (e) => {
    setTitle(e.target.value)
    // console.log('TARGET TITLE=>', e.target.value)
}
const bodyChange = (e) => {
    setBody(e.target.value)
    // console.log('TARGET BODY=>', e.target.value)
}
    console.log('user', user.id)

    const onSavePostClicked = () => {
        if (title && body) {
          const options = {id: params.id, title: title, body: body}  
          //.........ADD DATE TO UPDATED DATE.......//
            dispatch(updatePostLoading(options))
            navigate('../')    
        }
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
          <button className={s.btn} type="button" onClick={onSavePostClicked}>
            Cancel
          </button>
        </section>
      )
}
export default UpdatePost