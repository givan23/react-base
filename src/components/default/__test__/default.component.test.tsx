import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DefaultComponent from "../default.component";

afterEach(cleanup);

describe("With React Testing Library", () => {
  const initialState = { defaultData: { response: "no" }, value: 0 };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  

  test("the data button has a correct text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DefaultComponent />
      </Provider>
    );
    const btnDataEl = getByTestId("data-btn");

    expect(btnDataEl.textContent).toBe("GET DATA");
  });

  test("data field correct valorize", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DefaultComponent />
      </Provider>
    );
    const dataResponseEl = getByTestId("data-response");
  });

  test("the increment button has a correct text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DefaultComponent />
      </Provider>
    );
    const incrementBtnEl = getByTestId("increment-btn");
    expect(incrementBtnEl.textContent).toBe("INCREMENT");
  });

  test("the decrement button has a correct text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DefaultComponent />
      </Provider>
    );
    const decrementBtnEl = getByTestId("decrement-btn");
    expect(decrementBtnEl.textContent).toBe("DECREMENT");
  });

  test("value field correct valorize", async () => {
    const { getByTestId } = render(
        <Provider store={store}>
          <DefaultComponent />
        </Provider>
      );
    const valueResponseEl = getByTestId("value-response");
  });
});
