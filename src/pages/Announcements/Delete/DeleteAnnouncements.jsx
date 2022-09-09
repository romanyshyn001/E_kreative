import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  announcementsLoading,
  defaultError,
  removeAnnouncementLoading,
} from "../../../redux/slices/announcementSlices/announcements";

const DeleteAnnoucement = (props) => {
  const errorStatus = props.errorStatus;
  let announcement = props.announcement;
  const [removeStatus, setRemoveStatus] = useState("");
  const dispatch = useDispatch();

  const removeAnnouncementHandle = (value) => {
    dispatch(removeAnnouncementLoading(value));
  };

  useEffect(() => {
    if (errorStatus === "removeRejected") {
      setRemoveStatus("*Can not remove announcements.");
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
          className={"s.btn"}
          type="submit"
          onClick={() => removeAnnouncementHandle(announcement)}
        >
          Remove
        </button>
      </div>
      <div className={"s.removePost"}>
        <span className={"s.messageError"}>{removeStatus}</span>
      </div>
    </div>
  );
};
export default DeleteAnnoucement;
