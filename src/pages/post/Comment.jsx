import React from "react";
import { useSelector } from "react-redux/es/exports";
import s from './s.module.css'
import ava from './../../assets/photo/RayanR.png'

const Comments = (props) => {

  const { comments } = useSelector(state => state.comment)

  return  <div>
            { comments.map(i => <div key={i.id}>
                {   
                i.postId === props.post
                ? <div>
                    <div className={s.comment}><span>{i.body}</span></div>
                    <div className={s.ava}><img src={ava} alt="Rayan"/></div>
                  </div> 
                : null
                }
              </div>
            )}
          </div>
  }
export default Comments