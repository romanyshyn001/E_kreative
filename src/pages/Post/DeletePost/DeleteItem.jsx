import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { delPostLoading } from "../../../redux/slices/posts";
import s from "./DeleteItem.module.css";

const DeleteItem = (props) => {
  const dispatch = useDispatch();

  const delPost = (value) => {
    dispatch(delPostLoading(value));
  };
  return (
    <div>
      <button
        className={s.btn}
        type="submit"
        onClick={() => delPost(props.post)}
      >
        remove
      </button>
    </div>
  );
};
export default DeleteItem;
