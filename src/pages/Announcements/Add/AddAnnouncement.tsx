import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./AddArticle.module.css";
import {
  addAnnouncementLoading,
  defaultError,
} from "../../../redux/slices/announcementSlices/announcements";
import { useAppDispatch } from "../../../redux/app/hooks";
import { AnnouncementsType, UserType } from "../../../types/types";


type PropsType = {
  user: UserType
  errorStatus: string
}
const AddAnnoucement = ({ user, errorStatus }: PropsType) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState(String);
  const [title, setTitle] = useState(String);
  const [body, setBody] = useState(String);
  const [buttonStatus, setButtonStatus] = useState(false);
  const addTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const addBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.currentTarget.value);
  };

  const onSavePostClicked = () => {
    const createdAt = new Date().toISOString();
    if (user) {
      if (title && body) {
        const options: AnnouncementsType = {
          title: title,
          body: body,
          userId: user.id,
          createdAt: createdAt

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
    //todo: addRejected make enum 
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
          alt={'Input Title'}
          test-id={'test-id'}
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
