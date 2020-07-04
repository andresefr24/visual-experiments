import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function CustomRoute({ isPrivate, ...rest }) {
    if (isPrivate) {
        return <Redirect to="/" />;
    }
    return <Route {...rest} />;
}

CustomRoute.propTypes = { isPrivate: PropTypes.bool };

CustomRoute.defaultProps = { isPrivate: false };
