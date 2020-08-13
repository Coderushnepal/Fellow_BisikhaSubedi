import React, { Component } from "react";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";
import * as routes from "./constants/routes";
import Main from './main';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path={routes.HOME} component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
