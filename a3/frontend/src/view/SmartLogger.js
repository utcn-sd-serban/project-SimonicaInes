import React, { Component } from "react";
import model from "../model/model";

import Logger from "./Logger";
import loggerPresenter from "../presenter/loggerPresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.username,
    password: modelState.password

});

export default class SmartLogger extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <Logger
                login={loggerPresenter.login}
                onChange={loggerPresenter.onChange}
                username={this.state.username}
                password={this.state.password}/>
        );
    }
}
