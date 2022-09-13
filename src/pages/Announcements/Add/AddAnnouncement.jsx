import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./AddArticle.module.css";
import { useDispatch } from "react-redux";
import {
  addAnnouncementLoading,
  defaultError,
} from "../../../redux/slices/announcementSlices/announcements";

const AddAnnoucement = (props) => {
  const dispatch = useDispatch();
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
    if (props.user) {
      if (title && body) {
        const options = {
          title: title,
          body: body,
          userId: props.user.id,
          createdAt: createdAt,
        };
        dispatch(addAnnouncementLoading(options));
        setTitle("");
        setBody("");
      }
    } else {
      setButtonStatus(true);
    }
  };
  useEffect(() => {
    if (props.errorStatus === "addRejected") {
      setErrorMessage("*Something went wrong... Try again later");
    }

    return () => {
      setTimeout(() => {
        dispatch(defaultError());
        setErrorMessage("");
      }, 10000);
      setButtonStatus(false);
    };
  }, [dispatch, setErrorMessage, props.errorStatus]);

  return (
    <section>
      <h2>Announcement</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
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
export default AddAnnoucement;
