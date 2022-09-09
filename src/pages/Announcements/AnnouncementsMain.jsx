import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { announcementsLoading } from "../../redux/slices/announcementSlices/announcements";
import { announcementSelector } from "../../redux/slices/announcementSlices/announcementSelectors";
import AddAnnoucement from "./Add/AddAnnouncement";
import s from "./AnnouncementsMain.module.css";
import DeleteAnnoucement from "./Delete/DeleteAnnouncements";
import UpdateAnnoucement from "./Update/UpdateAnnouncements";

const AnnouncementsMain = () => {
  const dispatch = useDispatch();

  const {
    announcements,
    currentPage,
    perPage,
    totalPostCount,
    isLoading,
    errorStatus,
    getAnnouncementError,
  } = useSelector((state) => announcementSelector(state));

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    dispatch(announcementsLoading());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div>
        <div>
          <AddAnnoucement user={user} errorStatus={errorStatus} />
        </div>
        {announcements.map((announcement) => (
          <div key={announcement.id}>
            <div className={s.info}>
              <span>{announcement.title}</span>
              <div>
                <p>{announcement.body}</p>
                <p>{announcement.updatedAt}</p>
              </div>
            </div>
            <div>
              {user != null ? (
                <div>
                  {user.id === announcement.userId && (
                    <div className={s.action}>
                      <div>
                        <DeleteAnnoucement
                          announcement={announcement.id}
                          perPage={perPage}
                          currentPage={currentPage}
                          errorStatus={errorStatus}
                        />
                      </div>
                      <div>
                        <UpdateAnnoucement
                          user={user}
                          announcement={announcement}
                          errorStatus={errorStatus}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <h3 className={s.hidden}>Login for more opportunities</h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnnouncementsMain;
