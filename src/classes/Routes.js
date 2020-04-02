import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from '../app/App';
import Step2 from '../app/Step2';
import Step3 from '../app/Step3';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Step2" component={Step2} />
                    <Route path="/Step3" component={Step3} />
                </Switch>
            </Router>
        )
    }
}