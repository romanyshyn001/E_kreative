import React from "react";
import RemoveComment from "./DeleteComment/RemoveComment";
import s from "./CommentsMain.module.css";
import { Link } from "react-router-dom";

const CommentsManage = (props) => {
  return (
    <div>
      {props.user != null && (
        <div>
          {props.user.id === props.comment.userId && (
            <div className={s.action}>
              <RemoveComment comment={props.comment.id} />
              <Link
                to={`/comment/edit/${props.comment.id}`}
                state={{ user: props.user, comment: props.comment }}
              >
                <button className={s.btn}>Edit</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CommentsManage;
