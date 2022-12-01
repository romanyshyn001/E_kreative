import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./UpdateReply.module.css";
import {
  defaultError,
  EnumStatusComments,
  updateCommentLoading,
} from "../../../redux/slices/commentSlices/comments";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { UserType, CommentsType } from "../../../types/types";

type PropsType = {
  user: UserType,
  comment: CommentsType,
  errorStatus: string,
};

const UpdateReply = ({ user, comment, errorStatus }: PropsType) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateComment, setUpdate] = useState<string>(comment.body);
  const [errorCommentMessage, setErrorCommentMessage] = useState(String);

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
        user: user,
        createdAt: comment.createdAt
      };
      dispatch(updateCommentLoading(options));
    }
  };

  useEffect(() => {
    if (errorStatus === EnumStatusComments.editRejected) {
      setErrorCommentMessage("Can not update post");
      setTimeout(() => {
        setErrorCommentMessage("");
      }, 5000);
    } else if (errorStatus === EnumStatusComments.editSuccess) {
      handleClose();
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
