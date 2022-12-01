import React from "react";
import RemoveComment from "./DeleteComment/RemoveComment";
import s from "./CommentsMain.module.css";
import UpdateReply from "./UpdateComment/UpdateReply";
import { CommentsType, UserType } from "../../types/types";

type PropsType = {
  user: UserType;
  comment: CommentsType;
  errorStatus: string
}
const CommentsManage = ({ user, comment, errorStatus }: PropsType) => {

  return (
    <div>
      {user != null && (
        <div>
          {user.id === comment.userId && (
            <div className={s.action}>
              <RemoveComment
                comment={comment.id}
                errorStatus={errorStatus}
              />
              <UpdateReply
                user={user}
                comment={comment}
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
