// import your root components here
// router included for compatibility testing
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../Test";

const App = () => (
  <Router>
    <Switch>
      <Route component={Test} path="/" />
    </Switch>
  </Router>
);

export default App;
