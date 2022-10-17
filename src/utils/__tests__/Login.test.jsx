import React from "react";
import LoginMain from "../../components/Auth/Login/LoginMain";
import { renderWithProviders } from "../test-utils";
import "@testing-library/jest-dom";
import { render, fireEvent, wait, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import announcementsApi from '../../service/authApi'

describe("Profile Status Component", () => {
  test("should show login form", async () => {
    const handleSubmit = jest.fn();
    renderWithProviders(<LoginMain onSubmit={handleSubmit} />);
    // const instance = wrapper.instance();
    //   const submitBtn = app.find('#sign-in')
    //   submitBtn.simulate('click')
    //   expect(handleSubmit).toHaveBeenCalled();
  });
 

});
