import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./PostsMain.module.css";

import { postLoading } from "../../redux/slices/posts";
import { commentsLoading } from "../../redux/slices/comments";

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
    postError,
    editPostError,
    user
  } = useSelector((state) => {
    return {
      posts: state.posts.posts,
      perPage: state.posts.perPage,
      totalPostCount: state.posts.totalPostCount,
      currentPage: state.posts.currentPage,
      postError: state.posts.postError,
      //use later with Failure
      editPostError: state.posts.editPostError,
      user: state.authMe.authorize.user
    };
  });
  useEffect(() => {
    dispatch(postLoading({ currentPage, perPage }));
    dispatch(commentsLoading());
  }, [dispatch, currentPage, perPage]);

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
        editPostError={editPostError}
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
          <AddPost perPage={perPage} currentPage={currentPage} />
        )}
        {postError ? (
          <span className={s.messageError}>*Something go wrong</span>
        ) : (
          renderedPosts
        )}
      </section>
    </div>
  );
};

export default PostMain;
