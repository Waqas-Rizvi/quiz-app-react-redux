import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Quiz } from "../Screens/Quiz";
import { Start } from "../Screens/Start";

export const Routing = () => {
    return (
        <Router>
            <Route exact path="/" component={Start}/>
            <Route exact path="/quiz" component={Quiz}/>
        </Router>
    )
}