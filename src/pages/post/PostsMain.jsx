import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './s.module.css'
import PostPagination from "./PostPagination";

import { postLoading } from "../../redux/slices/article";
import { commentsLoading } from "../../redux/slices/comments";
import Comments from "../comments/CommentMain";
import DeletePost from "./deletePost/DeleteItem";
import { Link } from "react-router-dom";
import AddPost from "./addPost/AddNewPost";
import AddNewComment from "../comments/addComment/AddNewComment";

const PostMain = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch()

const { post, totalPostCount, perPage, currentPage } = useSelector((state) => {
      return {
         post: state.posts.post,
         perPage: state.posts.perPage,
         totalPostCount: state.posts.totalPostCount,
         currentPage: state.posts.currentPage,
      }})

   useEffect(() => {
      dispatch(postLoading({currentPage, perPage}))
      dispatch(commentsLoading())
    }, [dispatch, currentPage, perPage])

  const onChange = (currentPage) => {
      dispatch(postLoading({currentPage, perPage}))
  }

  const renderedPosts = post.map(p => (
    
    <article key={p.id}>
        <div className={s.info}>
          <h3>{p.title}</h3>      
          <div><p>{p.body}</p></div>
        </div>
      { user != null 
      ? <div >
        <div className={s.action}>
          <AddNewComment user={user} post={p}/>
          { user.id === p.userId
          ? <div className={s.action}>
              <Link to={`/posts/edit/${p.id}`} >
                <button className={s.btn}>Edit</button>
              </Link>

              <DeletePost post={p.id}/>
            </div>
          : null
        }
          </div>
        </div>
      : <h3 className={s.hidden}>Login for more opportunities</h3>
      } 
      <div>
        <Comments post={p} key={p.id} />
      </div>
    </article>
  ))
  

    return (
      <div className={s.container}>
        <PostPagination totalPostCount={totalPostCount} perPage={perPage}
                        currentPage={currentPage} onChange={onChange}
        />
        <section >
          <AddPost/>
          {renderedPosts}
        </section>
      </div>
      
  )
  
}

export default PostMain
