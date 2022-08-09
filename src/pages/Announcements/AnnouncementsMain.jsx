import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { announcementsLoading } from "../../redux/slices/announcements";
import s from "./AnnouncementsMain.module.css";

const AnnouncementsMain = () => {
  const dispatch = useDispatch();
  const { announcements } = useSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(announcementsLoading());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div>
        {announcements.map((announcement) => (
          <div key={announcement.id}>
            <div className={s.info}>
              <span>{announcement.title}</span>
              <div>
                <p>{announcement.body}</p>
                <p>{announcement.updatedAt.split("T")[0]}</p>
              </div>
            </div>

            <div className={s.action}>
              <span> Reply </span>
              <span> Edit </span>
              <span> Remove </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnnouncementsMain;
