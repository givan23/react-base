import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageOne from "../../pages/pageOne";
import PageTwo from "../../pages/pageTwo";

export default function Routing() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Page One</Link>
            </li>
            <li>
              <Link to="/page-two">Page Two</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <PageOne />
            </Route>
            <Route path="/page-two">
              <PageTwo />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}
