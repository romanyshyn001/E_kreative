import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addPostLoading, postLoading } from "../../../redux/slices/posts";
import s from "./AddNewPost.module.css";

const AddPost = (props) => {
  const currentPage = props.currentPage;
  const perPage = props.perPage;

  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addBody = (e) => {
    setBody(e.target.value);
  };

  const onSavePostClicked = () => {
    const createdAt = new Date().toISOString();
    if (user) {
      if (title && body) {
        const options = {
          title: title,
          body: body,
          userId: user.id,
          createdAt: createdAt,
        };
        dispatch(addPostLoading(options));
        setTitle("");
        setBody("");
      }
    } else {
      setButtonStatus(true);
    }
  };

  return (
    <section>
      <h2>What's on your mind?</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          className={s.postTitle}
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={addTitle}
          value={title}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          className={s.textInput}
          id="postContent"
          name="postContent"
          onChange={addBody}
          value={body}
        />
      </form>
      <div className={s.handlesPostStatus}>
        {buttonStatus ? (
          <h1 className={s.userError}> *You are not autorized</h1>
        ) : null}
        <button className={s.btn} type="button" onClick={onSavePostClicked}>
          Add post
        </button>
      </div>
    </section>
  );
};
export default AddPost;
