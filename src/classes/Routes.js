import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from '../app/App';
import history from './history';
import StepVeggies from "../app/StepVeggies";
import StepGrains from "../app/StepGrains";
import StepFruits from "../app/StepFruits";
import StepDairy from "../app/StepDairy";
import StepProteins from "../app/StepProteins";
import StepFinal from "../app/StepFinal";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/StepGrains" component={StepGrains} />
                    <Route path="/StepVeggies" component={StepVeggies} />
                    <Route path="/StepFruits" component={StepFruits} />
                    <Route path="/StepDairy" component={StepDairy} />
                    <Route path="/StepProteins" component={StepProteins} />
                    <Route path="/StepFinal" component={StepFinal} />
                </Switch>
            </Router>
        )
    }
}