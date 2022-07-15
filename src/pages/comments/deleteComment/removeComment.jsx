import React from "react";
import { useDispatch} from "react-redux/es/exports";
import { delCommentLoading } from "../../../redux/slices/comments";
import s from './../s.module.css'

const DeleteComment = (props) => {
    const dispatch = useDispatch()

    // console.log('props.comment =>', props.comment)

const delOnclick = (value) => {
    dispatch(delCommentLoading(value))
}

    return (
        <div className={s.removeContainer}> 
            <button className={s.btnRemove} type="submit" onClick={() =>  delOnclick(props.comment)}>remove</button>
        </div>
    )
}
export default DeleteComment
