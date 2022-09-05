import React, { useState } from "react";
import {
  defaultError,
  updatePostLoading,
} from "../../../redux/slices/postSlices/posts";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./UpdatePostMain.module.css";
import { useEffect } from "react";
// remove later
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const UpdatePostMain = (props) => {
  const errorStatus = props.errorStatus;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const [postStatus, setpostStatus] = useState();

  const { editPostError } = useSelector((state) => state.posts);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };
  const onSavePostClicked = () => {
    const updatedAt = new Date().toISOString();

    if (title && body) {
      const options = {
        id: props.post.id,
        title: title,
        body: body,
        updatedAt: updatedAt,
        userId: props.user.id,
      };
      dispatch(updatePostLoading(options));
    }
  };
  useEffect(() => {
    if (errorStatus === "editSuccess") {
      setpostStatus("Saving...");
      setTimeout(() => {
        setpostStatus("");
        handleClose();
      }, 500);
    } else if (errorStatus === "editRejected") {
      setpostStatus("Post not saved. Try again later...");
      setTimeout(() => {
        setpostStatus("");
      }, 5000);
    }
    return () => {
      dispatch(defaultError());
    };
  }, [dispatch, errorStatus]);

  return (
    <section className={s.secContainer}>
      <Button bsPrefix={s.btn} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Post title</Form.Label>
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
          <Button
            variant="primary"
            onClick={onSavePostClicked}
            disabled={editPostError === "decline"}
          >
            Save Changes
          </Button>
          <div>
            <span className={s.notifyPostStatus}>{postStatus}</span>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
export default UpdatePostMain;
