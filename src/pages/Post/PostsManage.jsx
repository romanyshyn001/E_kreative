import React from "react";
import { Link } from "react-router-dom";
import s from './PostsMain.module.css'

import DeletePost from "./DeletePost/DeleteItem";
import AddNewComment from "../Comments/AddComment/AddNewComment";
import CommentsMain from "../Comments/CommentMain";

const PostsManage = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const post = props.post
    return (
        <div>
            { user != null 
            ? <div>
            <div className={s.action}>
                <AddNewComment user={user} post={post}/>
                { user.id === post.userId &&
                <div className={s.action}>
                    <Link to={`/posts/edit/${post.id}`} >
                        <button className={s.btn}>Edit</button>
                    </Link>

                    <DeletePost post={post.id}/>
                </div>
                }
                </div>
            </div>
            : <h3 className={s.hidden}>Login for more opportunities</h3>
            } 
            <div>
                <CommentsMain post={post} key={post.id} />
            </div>
        </div>
    )
}
export default PostsManage
