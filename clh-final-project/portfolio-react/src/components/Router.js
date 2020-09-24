import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";

import Main from "./Main";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Main} />
    <Route exact path={routes.SKILLS} component={Skills} />
    <Route exact path={routes.BLOGS} component={Blogs} />
    <Route exact path={routes.GALLERY} component={Gallery} />
    <GetwayRoute path={routes.ADMIN}>
      <Admin />
    </GetwayRoute>
    <PrivateRoute path={routes.DASHBOARD}>
      <Dashboard />
    </PrivateRoute>
    {/* <Route exact path={routes.DASHBOARD} component={Dashboard} /> */}
  </Switch>
);

function GetwayRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("Token") !== null ? (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("Token") === null ? (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
export default AppRouter;
