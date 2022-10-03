import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store, { rootReducer } from "../redux/store";
import authMe from "../redux/slices/authMe";

export function renderWithProviders(
  ui,
  {
    //Переніс preloadedState в redux store
    // preloadedState = {},
    // store = configureStore({ reducer: { authMe }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
