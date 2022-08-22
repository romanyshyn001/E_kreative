import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { postLoading, removePostLoading } from "../../../redux/slices/posts";
import s from "./DeleteItem.module.css";

const DeleteItem = (props) => {
  const currentPage = props.currentPage;
  const perPage = props.perPage;

  const dispatch = useDispatch();

  const removePostHandle = (value) => {
    dispatch(removePostLoading(value));
    dispatch(postLoading({ currentPage, perPage }));
  };

  return (
    <div>
      <div>
        <button
          className={s.btn}
          type="submit"
          onClick={() => removePostHandle(props.post)}
        >
          remove
        </button>
      </div>
      <div>
        {props.removePostError ? (
          <span className={s.messageError}>
            *Can't remove post, try again later
          </span>
        ) : null}
      </div>
    </div>
  );
};
export default DeleteItem;
