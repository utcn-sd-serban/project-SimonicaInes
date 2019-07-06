import model from "../model/model";

class BuyGamePresenter {

    onCreate() {
        model.buyGame(model.state.makeSale.username,
            model.state.makeSale.game,
            model.state.makeSale.quantity,
            model.state.makeSale.price)
            .then(() => {
                model.changeNewBuyGameProperty("username", "");
                model.changeNewBuyGameProperty("game", "");
                model.changeNewBuyGameProperty("quantity", "");
                model.changeNewBuyGameProperty("price", "");

                window.location.assign("#/sales");
            });
    }

    onChange(property, value) {
        model.changeNewBuyGameProperty(property, value);
    }

}

const buyGamePresenter = new BuyGamePresenter();

export default buyGamePresenter;