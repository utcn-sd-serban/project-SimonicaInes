import React, { Component } from "react";
import model from "../model/model";
import salesListPresenter from "../presenter/salesListPresenter";
import SalesList from "./SalesList";

const mapModelStateToComponentState = modelState => ({
    sales: modelState.sales
});

export default class SmartGamesList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        salesListPresenter.onInit();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <SalesList
                onCreateSale={salesListPresenter.onCreateSale}
                buyGame={salesListPresenter.buyGame}
                sales={this.state.sales} />
        );
    }
}
