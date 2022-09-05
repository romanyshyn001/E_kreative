import React from "react";
import s from "./PostsMain.module.css";
import { useSelector } from "react-redux/es/exports";

import DeleteItem from "./DeletePost/DeleteItem";
import AddNewComment from "../Comments/AddComment/AddNewComment";
import CommentsMain from "../Comments/CommentsMain";
import UpdatePostMain from "./UpdatePost/UpdatePostMain";

const PostsManage = (props) => {
  const post = props.post;
  const user = JSON.parse(window.localStorage.getItem("user"));

  const { getCommentError } = useSelector((state) => {
    return {
      getCommentError: state.comment.getCommentError,
    };
  });

  return (
    <div>
      <div>
        {getCommentError && (
          <span className={s.messageError}>Can't upload comments</span>
        )}
      </div>
      {user != null ? (
        <div className={s.addComment}>
          <div>
            <AddNewComment
              user={user}
              post={post}
              perPage={props.perPage}
              currentPage={props.currentPage}
            />
          </div>
          {user.id === post.userId && (
            <div className={s.action}>
              <div>
                <UpdatePostMain
                  user={user}
                  post={post}
                  errorStatus={props.errorStatus}
                />
              </div>
              <div>
                <DeleteItem
                  post={post.id}
                  perPage={props.perPage}
                  currentPage={props.currentPage}
                  errorStatus={props.errorStatus}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <h3 className={s.hidden}>Login for more opportunities</h3>
      )}
      <div>
        <CommentsMain post={post} key={post.id} />
      </div>
    </div>
  );
};
export default PostsManage;
