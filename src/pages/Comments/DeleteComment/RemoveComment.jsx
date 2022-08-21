import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeCommentLoading } from "../../../redux/slices/comments";
import s from "./RemoveComment.module.css";

const RemoveComment = (props) => {
  const dispatch = useDispatch();

  const removeCommentHandle = (value) => {
    dispatch(removeCommentLoading(value));
  };

  return (
    <div>
      <button
        className={s.btn}
        type="submit"
        onClick={() => removeCommentHandle(props.comment)}
      >
        remove
      </button>
    </div>
  );
};
export default RemoveComment;
