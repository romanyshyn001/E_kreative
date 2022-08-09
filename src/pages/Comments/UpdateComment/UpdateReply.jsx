import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import s from "./UpdateReply.module.css";
import { updateCommentLoading } from "../../../redux/slices/comments";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateReply = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const comment = location.state.comment;
  const user = location.state.user;

  const [updateComment, setUpdate] = useState(comment.body);

  const bodyChange = (e) => {
    setUpdate(e.target.value);
  };

  const onSavePostClicked = () => {
    const updatedAt = new Date().toISOString();
    if (updateComment) {
      const options = {
        id: comment.id,
        userId: user.id,
        body: updateComment,
        updatedAt: updatedAt,
        postId: comment.postId,
      };
      dispatch(updateCommentLoading(options));
      navigate("../");
    }
  };

  const onCancelReply = () => {
    setUpdate(comment.body);
    navigate("../");
  };

  return (
    <div className={s.container}>
      <section>
        <h3>Update Comment</h3>
        <form>
          <textarea
            className={s.commentUpdate}
            id="postContent"
            name="postContent"
            value={updateComment}
            onChange={bodyChange}
          />
        </form>
        <div className={s.replyBtn}>
          <button className={s.btn} type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
          <button className={s.btn} type="button" onClick={onCancelReply}>
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};
export default UpdateReply;
