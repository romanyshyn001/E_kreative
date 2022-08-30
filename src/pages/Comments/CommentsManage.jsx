import React from "react";
import RemoveComment from "./DeleteComment/RemoveComment";
import s from "./CommentsMain.module.css";
import UpdateReply from "./UpdateComment/UpdateReply";

const CommentsManage = (props) => {
  return (
    <div>
      {props.user != null && (
        <div>
          {props.user.id === props.comment.userId && (
            <div className={s.action}>
              <RemoveComment comment={props.comment.id} />
              <UpdateReply user={props.user} comment={props.comment}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CommentsManage;
