import model from "../model/model";

class CreateExchangePresenter {

    onCreateExchange() {
        model.addExchange(
            model.state.newExchange.username,
            model.state.newExchange.offeredUsername,
            model.state.newExchange.game,
            model.state.newExchange.offeredGame)
            .then(() => {
                model.changeNewExchangeProperty("username", "");
                model.changeNewExchangeProperty("offeredUsername", "");
                model.changeNewExchangeProperty("game", "");
                model.changeNewExchangeProperty("offeredGame", "");
                window.location.assign("#/exchanges");
            });
    }

    onChangeExchange(property, value) {
        model.changeNewExchangeProperty(property, value);
    }

}

const createExchangePresenter = new CreateExchangePresenter();

export default createExchangePresenter;