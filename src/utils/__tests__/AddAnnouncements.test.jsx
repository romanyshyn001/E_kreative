import React from "react";
import AddAnnoucement from "../../pages/Announcements/Add/AddAnnouncement";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { renderWithProviders } from "../test-utils";

describe("Render AddAnnouncements Component", () => {
  it("Should render component", () => {
    renderWithProviders(<AddAnnoucement />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Input showed to user", () => {
    renderWithProviders(<AddAnnoucement />);
    expect(screen.getByAltText("Input Title")).toBeInTheDocument();
  });
});
