import model from "../model/model";

class GamesListPresenter {
    onCreateExchange() {
        window.location.assign("#/create-exchange");
    }

    onInit() {
        model.loadExchanges();
    }

    onChangeOffer(property, value){
        model.changeNewOfferProperty(property, value);
    }

    makeAnOffer(){

        model.addOffer(model.state.newOffer.username, model.state.newOffer.game, model.state.newOffer.offeredUsername, model.state.newOffer.offeredGame)
            .then(() => {
                model.changeNewOfferProperty("username", "");
                model.changeNewOfferProperty("game", "");
                model.changeNewOfferProperty("offeredUsername", "");
                model.changeNewOfferProperty("offeredGame", "");

            });
    }

    onChange(property, value) {
        model.changeNewExchangeProperty(property, value);
    }

}

const gamesListPresenter = new GamesListPresenter();

export default gamesListPresenter;