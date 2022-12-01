import React, { useEffect } from "react";
import { useState } from "react";
import {
  addCommentLoading,
  defaultError,
  EnumStatusComments,
} from "../../../redux/slices/commentSlices/comments";
import s from "./AddNewComment.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { commentSelector } from "../../../redux/slices/commentSlices/commentSelectors";
import { CommentsType, PostsType, UserType } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";

type PropsType = {
  user: UserType
  post: PostsType
  perPage: number
  currentPage: number
}
const AddNewComment = ({ user,
  post,
  perPage,
  currentPage }: PropsType) => {
  //todo: Test PerPage currentPage before remove it. 
  const dispatch = useAppDispatch();
  const [reply, setReply] = useState(String);
  const [errorMessage, setErrorMessage] = useState(String);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { errorStatus } = useAppSelector((state) => commentSelector(state));

  const addCommentHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.currentTarget.value);
  };
  const onSaveComment = () => {
    const createdAt = new Date().toISOString();

    const options: CommentsType = {
      body: reply,
      userId: user.id,
      postId: post.id,
      createdAt: createdAt,
      updatedAt: null,
      user: user,
      id: 0
    };

    dispatch(addCommentLoading(options));
    setReply("");
  };

  useEffect(() => {
    if (errorStatus === EnumStatusComments.addRejected) {
      setErrorMessage("*Can not add comment");
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    } else if (errorStatus === EnumStatusComments.addSuccess) {
      handleClose();
    }
    return () => {
      dispatch(defaultError());
    };
  }, [dispatch, errorStatus]);

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
