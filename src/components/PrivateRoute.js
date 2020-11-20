import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const AnonRoute = ({ component: Component, isLoggedin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withAuth(AnonRoute);