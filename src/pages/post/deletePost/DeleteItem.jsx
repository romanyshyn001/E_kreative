import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { delPostLoading } from "../../../redux/slices/article";

const DeletePost = (props) => {
    const dispatch = useDispatch()

const delPost = (value) => {
    dispatch(delPostLoading(value))
}


    return (
        <div> 
            <button  type="submit" onClick={() =>  delPost(props.post)}>remove</button>
        </div>
    )
}
export default DeletePost
