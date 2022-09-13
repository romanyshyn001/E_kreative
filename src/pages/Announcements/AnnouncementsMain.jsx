import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { announcementsLoading } from "../../redux/slices/announcementSlices/announcements";
import { announcementSelector } from "../../redux/slices/announcementSlices/announcementSelectors";
import AddAnnoucement from "./Add/AddAnnouncement";
import s from "./AnnouncementsMain.module.css";
import DeleteAnnoucement from "./Delete/DeleteAnnouncements";
import AnnouncementPagination from "./PageNumber/AnnouncementPagination";
import UpdateAnnoucement from "./Update/UpdateAnnouncements";

const AnnouncementsMain = () => {
  const dispatch = useDispatch();

  const {
    announcements,
    pageNumber,
    totalOnPage,
    totalAnnouncementCount,
    isLoading,
    errorStatus,
    getAnnouncementError,
  } = useSelector((state) => announcementSelector(state));

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (errorStatus === "addSuccess") {
      dispatch(announcementsLoading({ pageNumber, totalOnPage }));
    }
    dispatch(announcementsLoading({ pageNumber, totalOnPage }));
  }, [dispatch, pageNumber, totalOnPage, errorStatus]);

  const onChange = (pageNumber) => {
    dispatch(announcementsLoading({ pageNumber, totalOnPage }));
  };

  return (
    <div className={s.container}>
      <div>
        {getAnnouncementError ? (
          <span className={s.messageError}>*Something went wrong</span>
        ) : (
          <div>
            <div>
              <AnnouncementPagination
                totalPostCount={totalAnnouncementCount}
                totalOnPage={totalOnPage}
                pageNumber={pageNumber}
                onChange={onChange}
              />
            </div>
            <div>
              <AddAnnoucement
                user={user}
                errorStatus={errorStatus}
              />
            </div>
            {announcements.map((announcement) => (
              <div key={announcement.id}>
                <div className={s.info}>
                  <span>{announcement.title}</span>
                  <div>
                    <p>{announcement.body}</p>
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
        )}
      </div>
    </div>
  );
};
export default AnnouncementsMain;
