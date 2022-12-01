import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/app/hooks";
import {
  defaultError,
  EnumStatusComments,
  removeCommentLoading,
} from "../../../redux/slices/commentSlices/comments";
import s from "./RemoveComment.module.css";

type PropsType = {
  errorStatus: string
  comment: number
}
const RemoveComment = ({ errorStatus, comment }: PropsType) => {

  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState(String);

  useEffect(() => {
    if (errorStatus === EnumStatusComments.removeRejected) {
      setErrorMessage("**Can not remove comment");
      setTimeout(() => {
        setErrorMessage("");
        dispatch(defaultError());
      }, 4000);
    }
  }, [dispatch, errorStatus]);

  const removeCommentHandle = (commentId: any) => {
    dispatch(removeCommentLoading(commentId));
  };

  return (
    <div>
      <span className={s.messageError}>{errorMessage}</span>
      <button
        className={s.btn}
        type="submit"
        onClick={() => removeCommentHandle(comment)}
      >
        Remove
      </button>
    </div>
  );
};
export default RemoveComment;
