import model from "../model/model";

class CreateSalePresenter {

    onCreate() {
        model.addSale(model.state.newSale.username,
            model.state.newSale.game,
            model.state.newSale.quantity,
            model.state.newSale.price)
            .then(() => {
                model.changeNewSaleProperty("username", "");
                model.changeNewSaleProperty("game", "");
                model.changeNewSaleProperty("quantity", "");
                model.changeNewSaleProperty("price", "");

                window.location.assign("#/sales");
            });
    }

    onChange(property, value) {
        model.changeNewSaleProperty(property, value);
    }

}

const createSalePresenter = new CreateSalePresenter();

export default createSalePresenter;