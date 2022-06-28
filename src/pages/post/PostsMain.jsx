import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { postLoading } from "../../redux/slices/article";
import { commentsLoading } from "../../redux/slices/comments";
import Comments from "./Comment";
import s from './s.module.css'

const PostMain = () => {
  
  const dispatch = useDispatch()
  const { post, isAuth } = useSelector((state) => {
    return {
      post: state.posts,
      isAuth: state.login.isAuth
    }})
  
  useEffect(() => {
      dispatch(postLoading())
      dispatch(commentsLoading())
  },[dispatch])


  return (
      <div className={s.container}>
          { post.post.map((p) => 
          <div key={p.id}>
              <div className={s.info}>
                <span>{p.title}</span>      
                <div><p>{p.body}</p></div>
              </div>
              
              <div className={s.action}>
                  <span> Reply </span>
                  <span> Edit </span>
                  <span> Remove </span>
              </div>
              <div>
                <Comments post={p.id} key={p.id} />
              </div>
          </div>
    )}
      </div>
  )
}
export default PostMain

