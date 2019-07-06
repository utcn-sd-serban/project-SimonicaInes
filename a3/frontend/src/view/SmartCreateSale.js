import React, { Component } from "react";
import model from "../model/model";

import CreateSale from "./CreateSale";
import createSalePresenter from "../presenter/createSalePresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.newSale.username,
    game: modelState.newSale.game,
    quantity: modelState.newSale.quantity,
    price: modelState.newSale.price,
});

export default class SmartCreateSale extends Component {
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
            <CreateSale
                onCreate={createSalePresenter.onCreate}
                onChange={createSalePresenter.onChange}
                username={this.state.username}
                game={this.state.game}
                quantity={this.state.quantity}
                price={this.state.price}
               />
        );
    }
}
