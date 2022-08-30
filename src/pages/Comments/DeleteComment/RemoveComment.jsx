import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeCommentLoading, removeEmptyError } from "../../../redux/slices/comments";
import s from "./RemoveComment.module.css";

const RemoveComment = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const { removeError } = useSelector((state) => {
    return {
      removeError: state.comment.removeError,
    };
  });

  useEffect(() => {
    if (removeError === "reject") {
      setErrorMessage("**Can not remove comment");
      setTimeout(() => {
        setErrorMessage("");
        dispatch(removeEmptyError())
      }, 4000);
    } 
  }, [dispatch, removeError]);

  const removeCommentHandle = (value) => {
    dispatch(removeCommentLoading(value));
  };

  return (
    <div>
      <span className={s.messageError}>
        {errorMessage}  
      </span>
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
