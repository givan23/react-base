import React from "react";
import ReactDOM from "react-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Routing from "./common/routing/routing";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
