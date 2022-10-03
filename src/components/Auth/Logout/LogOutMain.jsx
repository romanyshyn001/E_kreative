import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutLoading } from "../../../redux/slices/authMe";

const LogOutMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutLoading());
  }, [dispatch]);

  return (
    <div>
      <Navigate to={"/posts"} />
    </div>
  );
};
export default LogOutMain;
