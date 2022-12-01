import React from "react";
import s from "./CommentsMain.module.css";
import ava from "./../../assets/images/empty.jpg";
import CommentsManage from "./CommentsManage";
import { commentSelector } from "../../redux/slices/commentSlices/commentSelectors";
import { CommentsType, PostsType } from "../../types/types";
import { useAppSelector } from "../../redux/app/hooks";

type PropsType = {
  post: PostsType
}
const CommentsMain = ({ post }: PropsType) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { comments, errorStatus } = useAppSelector((state) =>
    commentSelector(state)
  );

  return (
    <div>
      {comments.map((comment: CommentsType) => (
        <div key={comment.id}>
          {comment.postId === post.id && (
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
                <img className={s.userAvatar}
                  src={comment.user?.avatar ? comment.user.avatar : ava}
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
