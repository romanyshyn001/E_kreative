import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./UpdateReply.module.css";
import {
  defaultError,
  updateCommentLoading,
} from "../../../redux/slices/commentSlices/comments";
// remove later
// import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateReply = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const comment = props.comment;
  const user = props.user;

  const [updateComment, setUpdate] = useState(comment.body);
  const [errorCommentMessage, setErrorCommentMessage] = useState();

  const bodyChange = (e) => {
    setUpdate(e.target.value);
  };

  const onSavePostClicked = () => {
    const updatedAt = new Date().toISOString();
    if (updateComment) {
      const options = {
        id: comment.id,
        userId: user.id,
        body: updateComment,
        updatedAt: updatedAt,
        postId: comment.postId,
      };
      dispatch(updateCommentLoading(options));
    }
  };

  useEffect(() => {
    if (props.errorStatus === "editRejected") {
      setErrorCommentMessage("Can not update post");
      setTimeout(() => {
        setErrorCommentMessage("");
      }, 5000);
    } else if (props.errorStatus === "editSuccess") {
      handleClose();
    }

    return () => {
      dispatch(defaultError());
    };
  }, [dispatch, props.errorStatus]);

  return (
    <section className={s.secContainer}>
      <Button bsPrefix={s.btn} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder={"Add your text"}
              value={updateComment}
              onChange={bodyChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSavePostClicked}>
            Save Changes
          </Button>
          <div>
            <span className={s.notifyPostStatus}>{errorCommentMessage}</span>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
export default UpdateReply;
