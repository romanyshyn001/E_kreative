import React, { useEffect, useState } from "react";
import {
  defaultError,
  updateAnnouncementLoading,
} from "../../../redux/slices/announcementSlices/announcements";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import s from "./UpdateAnnouncements.module.css";

const UpdateAnnouncementMain = (props) => {
  const errorStatus = props.errorStatus;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.announcement.title);
  const [body, setBody] = useState(props.announcement.body);
  const [announcementStatus, setAnnouncementStatus] = useState();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };
  const onSaveannouncementClicked = () => {
    const updatedAt = new Date().toISOString();

    if (title && body) {
      const options = {
        id: props.announcement.id,
        title: title,
        body: body,
        updatedAt: updatedAt,
        userId: props.user.id,
      };
      dispatch(updateAnnouncementLoading(options));
    }
  };

  useEffect(() => {
    if (errorStatus === "editSuccess") {
      setAnnouncementStatus("Saving...");
      setTimeout(() => {
        setAnnouncementStatus("");
        handleClose();
      }, 500);
    } else if (errorStatus === "editRejected") {
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
