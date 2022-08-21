import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentLoading } from "../../../redux/slices/comments";
import s from "./AddNewComment.module.css";

const AddNewComment = (props) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    setButtonStatus((current) => !current);
    setReply("");
  };
  const addCommentHandle = (e) => {
    setReply(e.target.value);
  };
  const onSaveComment = () => {
    const createdAt = new Date().toISOString();

    const options = {
      body: reply,
      userId: props.user.id,
      postId: props.post.id,
      createdAt: createdAt,
      user: props.user,
    };

    dispatch(addCommentLoading(options));
    setButtonStatus((current) => !current);
  };

  return (
    <div>
      <div className={s.replyBtn}>
        <button className={s.btn} onClick={handleClick}>
          Reply
        </button>
      </div>
      {buttonStatus && (
        <section>
          <form>
            <textarea
              className={s.commentPost}
              type="text"
              id="comment"
              name="comment"
              onChange={addCommentHandle}
            />
          </form>
          <div className={s.save}>
            <button
              className={s.btn}
              type="button"
              onClick={onSaveComment}
              disabled={reply === ""}
            >
              Save
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
export default AddNewComment;
