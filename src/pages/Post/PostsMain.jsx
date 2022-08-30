import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./PostsMain.module.css";

import { postLoading } from "../../redux/slices/posts";
import PostPagination from "./Pagination/PostPagination";
import AddPost from "./AddPost/AddNewPost";
import PostsManage from "./PostsManage";

const PostMain = () => {
  const dispatch = useDispatch();
  const {
    posts,
    totalPostCount,
    perPage,
    currentPage,
    getPostsError,
    editPostError,
    addPostError,
    //user,
    postAdded,
  } = useSelector((state) => {
    return {
      posts: state.posts.posts,
      perPage: state.posts.perPage,
      totalPostCount: state.posts.totalPostCount,
      currentPage: state.posts.currentPage,
      getPostsError: state.posts.getPostsError,
      postAdded: state.posts.postAdded,
      editPostError: state.posts.editPostError,
      addPostError: state.posts.addPostError
      // при авторизації сторінка не рендириться, а якщо user витягую з localStorage все гуд
      // user: state.authMe.authorize.user
    };
  });
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (postAdded) {
      dispatch(postLoading({ currentPage, perPage }));
    }

    dispatch(postLoading({ currentPage, perPage }));
  }, [dispatch, currentPage, perPage, postAdded, editPostError]);

  const onChange = (currentPage) => {
    dispatch(postLoading({ currentPage, perPage }));
  };

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <div className={s.info}>
        <h3>{post.title}</h3>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
      <PostsManage
        post={post}
        perPage={perPage}
        currentPage={currentPage}
        user={user}
      />
    </article>
  ));

  return (
    <div className={s.container}>
      <PostPagination
        totalPostCount={totalPostCount}
        perPage={perPage}
        currentPage={currentPage}
        onChange={onChange}
      />
      <section className={s.mainSection}>
        {currentPage === 1 && (
          <AddPost perPage={perPage} currentPage={currentPage} addPostError={addPostError}/>
        )}
        {getPostsError ? (
          <span className={s.messageError}>*Something go wrong</span>
        ) : (
          renderedPosts
        )}
      </section>
    </div>
  );
};

export default PostMain;
