import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentLoading,
  addEmptyError,
} from "../../../redux/slices/comments";
import s from "./AddNewComment.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const AddNewComment = (props) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { addCommentError } = useSelector((state) => {
    return {
      addCommentError: state.comment.addCommentError,
    };
  });

  const addCommentHandle = (e) => {
    setReply(e.target.value);
  };
  const onSaveComment = () => {
    const createdAt = new Date().toISOString();

    const options = {
      body: reply,
      userId: props.user.id,
      postId: props.post.id,
      createdAt: createdAt,
      user: props.user,
    };

    dispatch(addCommentLoading(options));
    setReply("");
  };

  useEffect(() => {
    if (addCommentError === "reject") {
      setErrorMessage("Can not add comment");
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    } else if (addCommentError === "success") {
      handleClose();
    }
    return () => {
      dispatch(addEmptyError());
    };
  }, [dispatch, addCommentError]);

  return (
    <>
      <Button bsPrefix={s.btn} onClick={handleShow}>
        Reply
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={"Add your text"}
              onChange={addCommentHandle}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={onSaveComment}
            disabled={reply === ""}
          >
            Save Changes
          </Button>
          <div>
            <span>{errorMessage}</span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddNewComment;
