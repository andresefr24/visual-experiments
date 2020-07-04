import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "../Route";
import Home from "../../pages/Home";

export default function CustomRouter(props) {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}
