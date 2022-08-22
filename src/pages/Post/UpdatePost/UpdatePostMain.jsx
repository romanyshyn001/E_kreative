import React, { useState } from "react";
import { updatePostLoading } from "../../../redux/slices/posts";
import { useDispatch } from "react-redux/es/exports";
import s from "./UpdatePostMain.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePostMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state.user;
  const post = location.state.post;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

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
      navigate("../");
    }
  };

  const onCancelChange = () => {
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

      <div></div>
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
