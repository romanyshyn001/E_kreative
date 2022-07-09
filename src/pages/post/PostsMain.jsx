import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './s.module.css'
import PostPagination from "./PostPagination";

import { postLoading } from "../../redux/slices/article";
import { commentsLoading } from "../../redux/slices/comments";
import Comments from "../comments/CommentMain";
import DeletePost from "./deletePost/DeleteItem";
import { Link, NavLink, Routes } from "react-router-dom";
import UpdatePost from "./updatePost/updatePostMain";

const PostMain = () => {
  // const user = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch()

const { post, totalPostCount, perPage, currentPage, allInfo} = useSelector((state) => {
      return {
         post: state.posts.post,
         perPage: state.posts.perPage,
         totalPostCount: state.posts.totalPostCount,
         currentPage: state.posts.currentPage,
         allInfo: state.posts
      }})
   useEffect(() => {
      dispatch(postLoading({currentPage, perPage}))
      dispatch(commentsLoading())
    }, [dispatch, currentPage, perPage])

// console.log('allInfo =>', post)
  const onChange = (currentPage) => {
      dispatch(postLoading({currentPage, perPage}))
      dispatch(commentsLoading())
  }
   
  const renderedPosts = post.map(p => (
    <article key={p.id}>
        <div className={s.info}>
        <h3>{p.title}</h3>      
        <div><p>{p.body}</p></div>
      </div>
      <div className={s.action}>
        <Link to={`/article/edit/${p.id}`} >
          <button>Edit</button>
        </Link>
        
        <DeletePost post={p.id}/>
      </div>
      <div>
        <Comments post={p.id} key={p.id} />
      </div>
    </article>
  ))
  

    return (
      <div className={s.container}>
        <PostPagination totalPostCount={totalPostCount} perPage={perPage}
                        currentPage={currentPage} onChange={onChange}
        />
        <section >
          {renderedPosts}
        </section>
      </div>
      
  )
  
}

export default PostMain

// { post.map((p) => {
//   return <div>{ p.userId //=== user.id 
//  ? <div key={p.id}>
//     {/* <div className={s.info}>
//       <span>{p.title}</span>      
//       <div><p>{p.body}</p></div>
//     </div> */}
    
//     <div className={s.action}>
      
//         {/* <UpdatePost post={p}/> */}
      
//         <DeletePost post={p.id}/>
//         {/* <span> Reply </span> */}

//         <Link to={`edit/${p.id}`} >Edit</Link>
        

//          {/* <button className={s.btn} type="submit"> Edit </button> */}
         
//         </div>
//     <div>
//       <Comments post={p.id} key={p.id} />
//     </div>
// </div>
// : null}
// </div> 
// }
// )}

// {
//   allInfo && allInfo.post
//   && allInfo.post.map(p =>
//     <div>{ p.postEdit
//       ? <UpdatePost/>
//       : <div>{console.log(' p.postEdit',  p.postEdit)}
//           <div className={s.info}>
//             <span>{p.title}</span>      
//             <div><p>{p.body}</p></div>
//           </div>
//           <DeletePost post={p.id}/>
//           {/* <UpdatePost /> */}
//           <button className={s.btn} type="submit" > Edit </button> 

//         </div>
//     }</div>)
// }