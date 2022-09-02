import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  defaultError,
  postLoading,
  removePostLoading,
} from "../../../redux/slices/postSlices/posts";
import s from "./DeleteItem.module.css";

const DeleteItem = (props) => {
  const currentPage = props.currentPage;
  const perPage = props.perPage;
  const errorStatus = props.errorStatus;

  const [removeStatus, setRemoveStatus] = useState("");
  const dispatch = useDispatch();

  const removePostHandle = (value) => {
    dispatch(removePostLoading(value));
    dispatch(postLoading({ currentPage, perPage }));
  };

  useEffect(() => {
    if (errorStatus === "removeRejected") {
      setRemoveStatus("*Can not remove post.");
      setTimeout(() => {
        dispatch(defaultError());
        setRemoveStatus("");
      }, 2000);
    }
  }, [dispatch, errorStatus]);

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
