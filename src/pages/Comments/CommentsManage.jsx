import React from "react";
import RemoveComment from "./DeleteComment/RemoveComment";
import s from "./CommentsMain.module.css";
import UpdateReply from "./UpdateComment/UpdateReply";
import { useSelector } from "react-redux";

const CommentsManage = (props) => {
  const { errorStatus } = useSelector((state) => state.comment);

  return (
    <div>
      {props.user != null && (
        <div>
          {props.user.id === props.comment.userId && (
            <div className={s.action}>
              <RemoveComment
                comment={props.comment.id}
                errorStatus={errorStatus}
              />
              <UpdateReply
                user={props.user}
                comment={props.comment}
                errorStatus={errorStatus}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CommentsManage;
