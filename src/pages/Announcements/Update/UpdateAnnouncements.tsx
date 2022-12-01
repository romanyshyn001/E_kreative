import React, { useEffect, useState } from "react";
import {
  defaultError,
  EnumStatus,
  updateAnnouncementLoading,
} from "../../../redux/slices/announcementSlices/announcements";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import s from "./UpdateAnnouncements.module.css";
import { AnnouncementsType, UserType } from "../../../types/types";
import { useAppDispatch } from "../../../redux/app/hooks";

type PropsType = {
  announcement: AnnouncementsType;
  user: UserType;
  errorStatus: string
}
const UpdateAnnouncementMain = ({ announcement, user, errorStatus }: PropsType) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState(announcement.title);
  const [body, setBody] = useState(announcement.body);
  const [announcementStatus, setAnnouncementStatus] = useState(String);

  const titleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.currentTarget.value);
  };
  const bodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.currentTarget.value);
  };
  const onSaveannouncementClicked = () => {
    const updatedAt = new Date().toISOString();

    if (title && body) {
      const options: AnnouncementsType = {
        id: announcement.id,
        title: title,
        body: body,
        updatedAt: updatedAt,
        userId: user.id,
        createdAt: announcement.createdAt
      };
      dispatch(updateAnnouncementLoading(options));
    }
  };

  useEffect(() => {
    if (errorStatus === EnumStatus.editSuccess) {
      setAnnouncementStatus("Saving...");
      setTimeout(() => {
        setAnnouncementStatus("");
        handleClose();
      }, 500);
    } else if (errorStatus === EnumStatus.editRejected) {
      setAnnouncementStatus("Announcement not saved. Try again later...");
      setTimeout(() => {
        setAnnouncementStatus("");
      }, 5000);
    }
    return () => {
      dispatch(defaultError());
    };
  }, [dispatch, errorStatus]);

  return (
    <section>
      <Button bsPrefix={s.btn} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Announcement Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Announcement title</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder={"Add your text"}
              value={title}
              onChange={titleChange}
            />
            <Form.Label>Post body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder={"Add your text"}
              value={body}
              onChange={bodyChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSaveannouncementClicked}>
            Save Changes
          </Button>
          <div>
            <span className={s.notifyPostStatus}>{announcementStatus}</span>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
export default UpdateAnnouncementMain;
