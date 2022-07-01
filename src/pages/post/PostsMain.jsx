import React, { useEffect } from "react";
import s from './s.module.css'
import { useDispatch, useSelector } from "react-redux/es/exports";
import Comments from "./Comment";
import PostPagination from "./PostPagination";

import { postLoading } from "../../redux/slices/article";
import { commentsLoading } from "../../redux/slices/comments";

const PostMain = () => {
  
   const dispatch = useDispatch()

   const { post, totalPostCount, perPage, currentPage } = useSelector((state) => {
      return {
         post: state.posts.post,
         perPage: state.posts.perPage,
         totalPostCount: state.posts.totalPostCount,
         currentPage: state.posts.currentPage
      }})

   useEffect(() => {
      dispatch(postLoading({currentPage, perPage}))
      dispatch(commentsLoading())
   }, [dispatch, currentPage, perPage])


   const onChange = (currentPage) => {
      dispatch(postLoading({currentPage, perPage}))
      dispatch(commentsLoading())
   }
   
    return (
      <div className={s.container}>
        <PostPagination totalPostCount={totalPostCount} perPage={perPage}
                        currentPage={currentPage} onChange={onChange}
        />
        { post.map((p) => 
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

