import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./PostsMain.module.css";

import { postLoading } from "../../redux/slices/postSlices/posts";
import PostPagination from "./Pagination/PostPagination";
import AddPost from "./AddPost/AddNewPost";
import PostsManage from "./PostsManage";
import { postsSelector } from "../../redux/slices/postSlices/postsSelectors";
import { commentsLoading } from "../../redux/slices/comments";

const PostMain = () => {
  const dispatch = useDispatch();
  const {
    posts,
    totalPostCount,
    perPage,
    currentPage,
    getPostsError,
    addPostError,
    postAdded,
    errorStatus
  } = useSelector((state) => postsSelector(state));

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (postAdded) {
      dispatch(postLoading({ currentPage, perPage }));
    }
    dispatch(postLoading({ currentPage, perPage }));
    dispatch(commentsLoading());
  }, [dispatch, currentPage, perPage, postAdded]);

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
        postAdded={postAdded}
        errorStatus={errorStatus}
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
          <AddPost
            perPage={perPage}
            currentPage={currentPage}
            addPostError={addPostError}
            errorStatus={errorStatus}
          />
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
