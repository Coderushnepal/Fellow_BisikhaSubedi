import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as routes from "../constants/routes";

import Main from './Main';
import About from './About';
import Blogs from './Blogs';
import Gallery from './Gallery';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routes.BLOGS} component={Blogs} />
            <Route exact path={routes.GALLERY} component={Gallery} />
            <Route exact path={routes.ABOUT} component={About} />
            <Route path={routes.HOME} component={Main} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;