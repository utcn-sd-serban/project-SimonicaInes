import model from "../model/model";

class CreateGamePresenter {

    onCreate() {
        model.addGame(model.state.newGame.title, model.state.newGame.manufacturer,model.state.newGame.description, model.state.newGame.price)
            .then(() => {
                model.changeNewGameProperty("title", "");
                model.changeNewGameProperty("manufacturer", "");
                model.changeNewGameProperty("description", "");
                model.changeNewGameProperty("price", "");
                window.location.assign("#/games");
            });
    }

    onChange(property, value) {
        model.changeNewGameProperty(property, value);
    }

}

const createGamePresenter = new CreateGamePresenter();

export default createGamePresenter;