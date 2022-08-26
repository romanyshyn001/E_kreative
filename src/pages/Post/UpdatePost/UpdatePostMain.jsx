import React, { useState } from "react";
import { editEmptyError, updatePostLoading } from "../../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./UpdatePostMain.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UpdatePostMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const post = location.state.post;

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [postStatus, setpostStatus] = useState();

  const { editPostError } = useSelector((state) => state.posts);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };
  const onSavePostClicked = () => {
    const updatedAt = new Date().toISOString();

    if (title && body) {
      const options = {
        id: post.id,
        title: title,
        body: body,
        updatedAt: updatedAt,
        userId: user.id,
      };
      dispatch(updatePostLoading(options));
    }
  };
  useEffect(() => {
    if (editPostError === "success") {
      setpostStatus("Saving...");
      setTimeout(() => {
        setpostStatus("");
        navigate("../");
        dispatch(editEmptyError());
      }, 500);
    } else if (editPostError === "decline") {
      setpostStatus("Post not saved. Try again later...");
      setTimeout(() => {
        setpostStatus("");
        dispatch(editEmptyError());
      }, 5000);
    }
  }, [dispatch, editPostError, navigate]);

  const onCancelChange = () => {
    dispatch(editEmptyError());
    setTitle(post.title);
    setBody(post.body);
    navigate("../");
  };

  return (
    <section className={s.secContainer}>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          className={s.editTitle}
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={titleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          className={s.editBody}
          id="postContent"
          name="postContent"
          value={body}
          onChange={bodyChange}
        />
      </form>
      <div>
        <span className={s.notifyPostStatus}>{postStatus}</span>
      </div>
      <button
        className={s.btn}
        type="button"
        onClick={onSavePostClicked}
        disabled={title && body === ""}
      >
        Save Post
      </button>
      <button className={s.btn} type="button" onClick={onCancelChange}>
        Cancel
      </button>
    </section>
  );
};
export default UpdatePostMain;
