import React, { Component } from "react";
import model from "../model/model";

import FilterByTitle from "./FilterByTitle"

const mapModelStateToComponentState = modelState => ({
    filteredQuestions: modelState.filteredQuestions
});

export default class SmartFilterByTitle extends Component {
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
            <FilterByTitle

                filteredQuestions={this.state.filteredQuestions}
            />
        );
    }
}
