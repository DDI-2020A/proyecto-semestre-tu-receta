import { Result } from 'antd';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from "../pages/About";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/myRecipes' >
                <Result />
            </Route>
            
            <Route path='/about' >
                <About />
            </Route>

            <Route component={Home}/>
        </Switch>
    );
};

export default AppRouter; 