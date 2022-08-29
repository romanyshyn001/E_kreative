import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./PostsMain.module.css";
import { useDispatch } from "react-redux/es/exports";

import DeleteItem from "./DeletePost/DeleteItem";
import AddNewComment from "../Comments/AddComment/AddNewComment";
import CommentsMain from "../Comments/CommentsMain";
import { commentsLoading } from "../../redux/slices/comments";
import UpdatePostMain from "./UpdatePost/UpdatePostMain";

const PostsManage = (props) => {
  const post = props.post;
  const user = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsLoading());
  }, [dispatch]);

  return (
    <div>
      {user != null ? (
        <div className={s.action}>
          <div>
            <AddNewComment user={user} post={post} />
          </div>
          {user.id === post.userId && (
            <div className={s.action}>
              <div>
                <UpdatePostMain user={user} post={post} />
              </div>
              <div>
                <DeleteItem
                  post={post.id}
                  perPage={props.perPage}
                  currentPage={props.currentPage}
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
