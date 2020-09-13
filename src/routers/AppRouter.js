import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Question from "../pages/Question";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/profile'>
                <Profile/>
            </Route>
            <Route path='/question'>
                <Question/>
            </Route>
        </Switch>
    );
};

export default AppRouter;