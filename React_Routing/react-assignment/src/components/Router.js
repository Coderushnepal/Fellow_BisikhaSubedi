import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "../constants/routes";

import Main from "./Main";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Review from "./Review";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Main} />
    <Route exact path={routes.BLOGS} component={Blogs} />
    <Route exact path={routes.GALLERY} component={Gallery} />
    <Route exact path={routes.CONTACT} component={Contact} />
    <PrivateRoute exact path={routes.REVIEW} component={Review} />
  </Switch>
);

export default AppRouter;
