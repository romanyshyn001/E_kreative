import React from "react";
import { Link } from "react-router-dom";
import s from "./PostsMain.module.css";

import DeleteItem from "./DeletePost/DeleteItem";
import AddNewComment from "../Comments/AddComment/AddNewComment";
import CommentsMain from "../Comments/CommentsMain";

const PostsManage = (props) => {
  const user = props.user
  const post = props.post;
// console.log(props.user)
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
