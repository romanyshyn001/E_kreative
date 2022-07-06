import React from "react";
import { useEffect } from "react";
// import { logoutLoading } from "../../../redux/slices/login";
import { useDispatch } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import { logoutLoading } from "../../../redux/slices/authMe";

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logoutLoading())
    }, [dispatch])

    return (
        <div>
            <Navigate to={'/article'}/>
        </div>
    )
}
export default LogOut