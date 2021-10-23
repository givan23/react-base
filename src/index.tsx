import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "../store/store";
import Routing from "./common/routing/routing";
import "./index.scss";
import { switchEnvVariables } from "./utility/common.utility";

const App = () => {
  console.log(switchEnvVariables().DOMAIN);

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
