import React from "react";
import {Router,Route, Redirect,hashHistory} from 'react-dom'

import Todo from "../todo/todo";
import About from "../about/about";

export default props =>(
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}></Route>
        <Route path='/about' component={bout}></Route>
        <Redirect from='' to='/todos'/>
    </Router>
)