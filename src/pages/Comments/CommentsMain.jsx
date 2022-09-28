import React from "react";
import { useSelector } from "react-redux";
import s from "./CommentsMain.module.css";
import ava from "./../../assets/images/empty.jpg";
import CommentsManage from "./CommentsManage";
import { commentSelector } from "../../redux/slices/commentSlices/commentSelectors";

const CommentsMain = (props) => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const { comments, errorStatus } = useSelector((state) =>
    commentSelector(state)
  );

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
                  <CommentsManage
                    user={user}
                    comment={comment}
                    errorStatus={errorStatus}
                  />
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
