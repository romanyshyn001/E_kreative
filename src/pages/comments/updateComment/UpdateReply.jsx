import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import s from './../s.module.css'
import { updateCommentLoading } from "../../../redux/slices/comments";

const UpdateComment = (props) => {
    const dispatch = useDispatch()


const [updateComment, setUpdate] = useState(props.comment.body)
const [status, setStatus] = useState(false)


    const bodyChange = (e) => {
        setUpdate(e.target.value)
    }
    const handleClick = (event) => {
        setStatus(true)
    }
    const onSavePostClicked = () => {
        if (updateComment) {
            //.........ADD DATE.......//
          const options = {id: props.comment.id, userId: props.user.id, body: updateComment,
            createdAt: null, updatedAt: null, postId: props.comment.postId}  
            dispatch(updateCommentLoading(options))
            setStatus(false)
        }
      }

    const onCancelReply = () => {
        setUpdate(props.comment.body)
        setStatus(false)
    }

    return (
        <div>
            <div className={'s.replyBtn'}>
                <button className={s.btn} onClick={handleClick}>
                update
                </button>
            </div>
            {status && ( 
                <section className={'s.secContainer'}>
            <form >
                <textarea className={s.commentUpdate}
                id="postContent"
                name="postContent"
                value={updateComment}
                onChange={bodyChange}
                />
            </form>
            <div className={s.replyBtn}>
                <button className={s.btn} type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
                <button className={s.btn} type="button" onClick={onCancelReply}>
                    Cancel
                </button>
            </div>
            </section>
        )}
        </div>
      )
}
export default UpdateComment