import model from "../model/model";

class SalesListPresenter {
    onCreateSale() {
        window.location.assign("#/create-sale");
    }

    onInit() {
        model.loadSales();
    }


    buyGame(){
       window.location.assign("#buy-game");
    }
}

const salesListPresenter = new SalesListPresenter();

export default salesListPresenter;