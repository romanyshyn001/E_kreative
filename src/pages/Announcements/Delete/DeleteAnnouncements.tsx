import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/app/hooks";
import {
  announcementsLoading,
  defaultError,
  EnumStatus,
  removeAnnouncementLoading,
} from "../../../redux/slices/announcementSlices/announcements";
import { AnnouncementsType } from "../../../types/types";
import s from "./DeleteAnnouncements.module.css";

type PropsType = {
  announcement: AnnouncementsType
  errorStatus: string
  pageNumber: number
  totalOnPage: number

}
const DeleteAnnoucement = ({ announcement, errorStatus, totalOnPage, pageNumber }: PropsType) => {

  const [removeStatus, setRemoveStatus] = useState(String);
  const dispatch = useAppDispatch()

  const removeAnnouncementHandle = (announcementId: any) => {
    dispatch(removeAnnouncementLoading(announcementId));
    dispatch(announcementsLoading({ pageNumber, totalOnPage }))
  };

  useEffect(() => {
    if (errorStatus === EnumStatus.removeRejected) {
      setRemoveStatus("*Can not remove announcement.");
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
          onClick={() => removeAnnouncementHandle(announcement.id)}
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
export default DeleteAnnoucement;
