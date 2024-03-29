import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./PostsMain.module.css";

import { postLoading } from "../../redux/slices/postSlices/posts";
import AddPost from "./AddPost/AddNewPost";
import PostsManage from "./PostsManage";
import { postsSelector } from "../../redux/slices/postSlices/postsSelectors";
import { commentsLoading } from "../../redux/slices/commentSlices/comments";
import Pagination from "../../components/Pagination/Pagination";

const PostMain = () => {
  const dispatch = useDispatch();
  const {
    posts,
    totalPostCount,
    perPage,
    currentPage,
    getPostsError,
    errorStatus,
  } = useSelector((state) => postsSelector(state));

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (errorStatus === "addSuccess") {
      dispatch(postLoading({ currentPage, perPage }));
    }

    dispatch(postLoading({ currentPage, perPage }));
    dispatch(commentsLoading());
  }, [dispatch, currentPage, perPage, errorStatus]);

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
        errorStatus={errorStatus}
      />
    </article>
  ));

  return (
    <div className={s.container}>
      <section className={s.mainSection}>
        {currentPage === 1 && (
          <AddPost
            perPage={perPage}
            currentPage={currentPage}
            errorStatus={errorStatus}
          />
        )}
        {getPostsError ? (
          <span className={s.messageError}>*Something go wrong</span>
        ) : (
          renderedPosts
        )}
        <Pagination
          totalPostCount={totalPostCount}
          perPage={perPage}
          currentPage={currentPage}
          onChange={onChange}
        />
      </section>
    </div>
  );
};

export default PostMain;
