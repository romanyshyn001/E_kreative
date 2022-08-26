import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./PostsMain.module.css";
import { useDispatch } from "react-redux/es/exports";

import DeleteItem from "./DeletePost/DeleteItem";
import AddNewComment from "../Comments/AddComment/AddNewComment";
import CommentsMain from "../Comments/CommentsMain";
import { commentsLoading } from "../../redux/slices/comments";

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
        <div>
          <div className={s.action}>
            <AddNewComment user={user} post={post} />
            {user.id === post.userId && (
              <div className={s.action}>
                <Link
                  to={`edit/${post.id}`}
                  state={{
                    user: user,
                    post: post,
                  }}
                >
                  <button className={s.btn}>Edit</button>
                </Link>

                <DeleteItem
                  post={post.id}
                  perPage={props.perPage}
                  currentPage={props.currentPage}
                />
              </div>
            )}
          </div>
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
