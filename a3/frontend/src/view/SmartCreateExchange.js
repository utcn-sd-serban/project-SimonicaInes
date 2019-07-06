import React, { Component } from "react";
import model from "../model/model";

import createExchangePresenter from "../presenter/createExchangePresenter";
import CreateExchange from "./CreateExchange";

const mapModelStateToComponentState = modelState => ({
    username: modelState.newExchange.username,
    customer: modelState.newExchange.customer,
    game: modelState.newExchange.game,
    gameOffer: modelState.newExchange.gameOffer
});

export default class SmartCreateExchange extends Component {
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
            <CreateExchange
                onCreateExchange={createExchangePresenter.onCreateExchange}
                onChangeExchange={createExchangePresenter.onChangeExchange}
                username={this.state.username}
                customer={this.state.customer}
                game={this.state.game}
                gameOffer={this.state.gameOffer}
               />
        );
    }
}
