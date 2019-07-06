import React, { Component } from "react";
import model from "../model/model";

import CreateGame from "./CreateGame";
import createGamePresenter from "../presenter/createGamePresenter";

const mapModelStateToComponentState = modelState => ({
    title: modelState.newGame.title,
    manufacturer: modelState.newGame.manufacturer,
    description: modelState.newGame.description,
    price: modelState.newGame.price,
});

export default class SmartCreateGame extends Component {
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
            <CreateGame
                onCreate={createGamePresenter.onCreate}
                onChange={createGamePresenter.onChange}
                title={this.state.title}
                manufacturer={this.state.manufacturer}
                description={this.state.description}
                price={this.state.price}
               />
        );
    }
}
