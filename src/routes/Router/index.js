import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "../Route";
import Home from "../../pages/Home";
import Experiment1 from "../../pages/Experiment1";

export default function CustomRouter(props) {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experiment-1" component={Experiment1} />
      </Switch>
    </Router>
  );
}
