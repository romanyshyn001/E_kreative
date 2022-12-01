import React from "react";
import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { announcementsLoading } from "../../redux/slices/announcementSlices/announcements";
import { announcementSelector } from "../../redux/slices/announcementSlices/announcementSelectors";
import AddAnnoucement from "./Add/AddAnnouncement";
import s from "./AnnouncementsMain.module.css";
import DeleteAnnoucement from "./Delete/DeleteAnnouncements";
import UpdateAnnoucement from "./Update/UpdateAnnouncements";
import { RootStateType } from "../../redux/store";
import { AnnouncementsType } from '../../types/types'
import { EnumStatus } from '../../redux/slices/announcementSlices/announcements'

const AnnouncementsMain = () => {
  const dispatch = useAppDispatch()
  const {
    announcements,
    pageNumber,
    totalOnPage,
    totalAnnouncementCount,
    // todo: add Loader later
    isLoading,
    errorStatus,
    getAnnouncementError,
  } = useAppSelector((state: RootStateType) => announcementSelector(state));


  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (errorStatus === EnumStatus.addSuccess) {
      dispatch(announcementsLoading({ pageNumber, totalOnPage }));
    }
    dispatch(announcementsLoading({ pageNumber, totalOnPage }));
  }, [dispatch, pageNumber, totalOnPage, errorStatus]);

  const onChange = (pageNumber: number) => {
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
              <AddAnnoucement user={user} errorStatus={errorStatus} />
            </div>
            {announcements.map((announcement: AnnouncementsType) => (
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
                            <UpdateAnnoucement
                              user={user}
                              announcement={announcement}
                              errorStatus={errorStatus}
                            />
                          </div>
                          <div>
                            <DeleteAnnoucement
                              announcement={announcement}
                              errorStatus={errorStatus}
                              pageNumber={pageNumber}
                              totalOnPage={totalOnPage}
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
      <div>
        <Pagination
          totalPostCount={totalAnnouncementCount}
          perPage={totalOnPage}
          currentPage={pageNumber}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default AnnouncementsMain;
