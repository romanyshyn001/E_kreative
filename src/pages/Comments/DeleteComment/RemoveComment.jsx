import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  defaultError,
  removeCommentLoading,
} from "../../../redux/slices/commentSlices/comments";
import s from "./RemoveComment.module.css";

const RemoveComment = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (props.errorStatus === "removeRejected") {
      setErrorMessage("**Can not remove comment");
      setTimeout(() => {
        setErrorMessage("");
        dispatch(defaultError());
      }, 4000);
    }
  }, [dispatch, props.errorStatus]);

  const removeCommentHandle = (value) => {
    dispatch(removeCommentLoading(value));
  };

  return (
    <div>
      <span className={s.messageError}>{errorMessage}</span>
      <button
        className={s.btn}
        type="submit"
        onClick={() => removeCommentHandle(props.comment)}
      >
        Remove
      </button>
    </div>
  );
};
export default RemoveComment;
