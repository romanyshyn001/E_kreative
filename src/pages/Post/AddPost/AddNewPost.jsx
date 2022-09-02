import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  addPostLoading,
  defaultError,
} from "../../../redux/slices/postSlices/posts";
import s from "./AddNewPost.module.css";

const AddPost = (props) => {
  const errorStatus = props.errorStatus;
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [errorMessage, setErrorMessage] = useState("");
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

  useEffect(() => {
    if (errorStatus === "addRejected") {
      setErrorMessage("*Something went wrong... Try again later");
    }

    return () => {
      setTimeout(() => {
        dispatch(defaultError());
        setErrorMessage("");
      }, 10000);
      setButtonStatus(false);
    };
  }, [dispatch, setErrorMessage, errorStatus]);

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
        {buttonStatus && (
          <div>
            <span className={s.userError}>*You are not autorized</span>
          </div>
        )}
        <div>
          <span className={s.userError}>{errorMessage}</span>
        </div>
        <button className={s.btn} type="button" onClick={onSavePostClicked}>
          Add post
        </button>
      </div>
    </section>
  );
};
export default AddPost;
