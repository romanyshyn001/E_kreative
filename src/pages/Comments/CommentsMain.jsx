import React from "react";
import { useSelector } from "react-redux/es/exports";
import s from "./CommentsMain.module.css";
import ava from "./../../assets/images/empty.jpg";
import CommentsManage from "./CommentsManage";

const CommentsMain = (props) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const { comments } = useSelector((state) => state.comment);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.postId === props.post.id && (
            <div>
              <div className={s.comment}>
                <div>
                  <div>
                    <span>{comment.body}</span>
                  </div>
                </div>
                <div>
                  <CommentsManage user={user} comment={comment} />
                </div>
              </div>
              <div className={s.ava}>
                <img
                  src={comment.user.avatar ? comment.user.avatar : ava}
                  alt="your avatar"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CommentsMain;
