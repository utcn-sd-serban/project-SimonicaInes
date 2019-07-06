import React, { Component } from "react";
import model from "../model/model";

import BuyGame from "./buyGame";
import buyGamePresenter from "../presenter/buyGamePresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.makeSale.username,
    game: modelState.makeSale.game,
    quantity: modelState.makeSale.quantity,
    price: modelState.makeSale.price,
});

export default class SmartBuyGame extends Component {
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
            <BuyGame
                onCreate={buyGamePresenter.onCreate}
                onChange={buyGamePresenter.onChange}
                username={this.state.username}
                game={this.state.game}
                quantity={this.state.quantity}
                price={this.state.price}
               />
        );
    }
}
