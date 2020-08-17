import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Main from './main';
import Favourites from './favorites';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routes.FAVOURITES} component={Favourites} />
            <Route path={routes.HOME} component={Main} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
