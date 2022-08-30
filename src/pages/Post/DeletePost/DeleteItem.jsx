import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  postLoading,
  removeEmptyError,
  removePostLoading,
} from "../../../redux/slices/posts";
import s from "./DeleteItem.module.css";

const DeleteItem = (props) => {
  const currentPage = props.currentPage;
  const perPage = props.perPage;

  const [removeStatus, setRemoveStatus] = useState("");
  const { removeError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const removePostHandle = (value) => {
    dispatch(removePostLoading(value));
    dispatch(postLoading({ currentPage, perPage }));
  };

  useEffect(() => {
    if (removeError === "sucess") {
      dispatch(removeEmptyError());
    } else if (removeError === "reject") {
      setRemoveStatus("*Can not remove post.");
      setTimeout(() => {
        dispatch(removeEmptyError());
        setRemoveStatus("");
      }, 2000);
    }
  }, [dispatch, removeError, currentPage, perPage]);

  return (
    <div>
      <div>
        <button
          className={s.btn}
          type="submit"
          onClick={() => removePostHandle(props.post)}
        >
          Remove
        </button>
      </div>
      <div className={s.removePost}>
        <span className={s.messageError}>{removeStatus}</span>
      </div>
    </div>
  );
};
export default DeleteItem;
