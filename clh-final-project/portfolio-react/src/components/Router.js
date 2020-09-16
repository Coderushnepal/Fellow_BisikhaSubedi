import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "../constants/routes";

import Main from "./Main";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Admin from "./Admin";
import Dashboard from "./Dashboard";

const AppRouter = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Main} />
    <Route exact path={routes.SKILLS} component={Skills} />
    <Route exact path={routes.BLOGS} component={Blogs} />
    <Route exact path={routes.GALLERY} component={Gallery} />
    <Route exact path={routes.ADMIN} component={Admin} />
    <Route exact path={routes.DASHBOARD} component={Dashboard} />
  </Switch>
);

export default AppRouter;
