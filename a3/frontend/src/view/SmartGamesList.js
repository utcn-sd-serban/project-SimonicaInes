import React, { Component } from "react";
import model from "../model/model";
import gamesListPresenter from "../presenter/gamesListPresenter";
import GamesList from "./GamesList";

const mapModelStateToComponentState = modelState => ({
    games: modelState.games
});

export default class SmartGamesList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        gamesListPresenter.onInit();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <GamesList
                onCreateGame={gamesListPresenter.onCreateGame}
                swapToFilter={gamesListPresenter.swapToFilter}
                showAllGames={gamesListPresenter.showUserGames}
                logOut={gamesListPresenter.logOut}
                listExchanges={gamesListPresenter.listExchanges}
                listSales={gamesListPresenter.listSales}
                //onFilterByTitleGame={questionsListPresenter.onFilterByTitleQuestion}
                //onFilterByTagQuestion={questionsListPresenter.onFilterByTagQuestion}
                games={this.state.games} />
        );
    }
}
