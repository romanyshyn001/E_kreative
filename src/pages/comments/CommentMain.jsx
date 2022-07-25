import React from "react";
import { useSelector } from "react-redux/es/exports";
import s from './s.module.css'
import ava from './../../assets/images/empty.jpg'
import DeleteComment from "./deleteComment/removeComment";
import UpdateComment from "./updateComment/UpdateReply";

const Comments = (props) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { comments } = useSelector(state => state.comment)
  
  // console.log('props =>' , props.post.user)
  return  <div >
            { comments.map(comment => <div key={comment.id}>
                { comment.postId === props.post.id 
                ? <div>
                <div className={s.comment}> 
                    <div>
                      <div ><span>{comment.body}</span></div>
                    </div> 

                    <div>
                    { user != null
                    ? <div>
                      { user.id === comment.userId
                      ? 
                      <div className={s.action}>
                        <DeleteComment comment={comment.id}/>
                        <UpdateComment comment={comment} user={user}/>
                        
                      </div>
                      : null
                      }
                      </div>
                    : null
                    }
                    </div>
                  </div>
                  <div className={s.ava}>
                    <img src={comment.user.avatar ? comment.user.avatar : ava} alt="your avatar"/>
                  </div>
                </div>
                : null
                } 
              </div>
            )}
          </div>
  }
export default Comments