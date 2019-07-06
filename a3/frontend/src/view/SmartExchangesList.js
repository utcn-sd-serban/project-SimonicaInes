import React, { Component } from "react";
import model from "../model/model";
import exchangesListPresenter from "../presenter/exchangesListPresenter";
import ExchangesList from "./ExchangeList";

const mapModelStateToComponentState = modelState => ({
    exchanges: modelState.exchanges
});

export default class SmartGamesList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        exchangesListPresenter.onInit();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <ExchangesList
                onCreateExchange={exchangesListPresenter.onCreateExchange}
                onChangeOffer={exchangesListPresenter.onChangeOffer}
                makeAnOffer={exchangesListPresenter.makeAnOffer}
                exchanges={this.state.exchanges} />
        );
    }
}
