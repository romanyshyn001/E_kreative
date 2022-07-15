import React from "react";
import { useSelector } from "react-redux/es/exports";
import s from './s.module.css'
import ava from './../../assets/images/RayanR.png'
import DeleteComment from "./deleteComment/removeComment";

const Comments = (props) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { comments } = useSelector(state => state.comment)
  
  
  return  <div >
            { comments.map(comment => <div key={comment.id}>
                { comment.postId === props.post 
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
                      </div>
                      : null
                      }
                      </div>
                    : null
                    }
                    </div>
                  </div>
                <div className={s.ava}><img src={ava} alt="Rayan"/></div>
                  </div>
                : null
                } 
              </div>
            )}
          </div>
  }
export default Comments