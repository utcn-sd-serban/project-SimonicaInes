import model from "../model/model";

class GamesListPresenter {
    onCreateGame() {
        window.location.assign("#/create-game");
    }

    onInit() {
        model.loadGames();
    }

    onFilterByTitleGame(){
        model.clearFilters();

        let iterator;
        for(iterator=0; iterator<model.state.games.length; iterator++){
            if(model.state.games[iterator].title===model.state.toFilter){
                model.addToFIlteredGames(
                    model.state.games[iterator].title,
                    model.state.games[iterator].manufacturer,
                    model.state.games[iterator].description,
                    model.state.games[iterator].price
                )
            }
        }
        // model.filterByTitle(model.state.toFilter);
        window.location.assign("#/filter-title-game");

    }

    swapToFilter(property,value){
        model.swapToFilter(property,value);
    }

    onFilterByTagQuestion() {
        model.clearFilters();

        let iterator;
        for (iterator = 0; iterator < model.state.questions.length; iterator++) {
            if (model.state.questions[iterator].tags === model.state.toFilter) {
                model.addToFIlteredQuestions(
                    model.state.questions[iterator].authorId,
                    model.state.questions[iterator].title,
                    model.state.questions[iterator].text,
                    model.state.questions[iterator].tags,

                    model.state.questions[iterator].date
                )
            }
        }
        // model.filterByTitle(model.state.toFilter);
        window.location.assign("#/filter-title-game");
    }

    showUserGames(){
        model.showAllGames();
        window.location.assign("#/showGames");
    }

    logOut(){
        model.changeProperty("username","");
        model.changeProperty("password","");

        window.location.assign("#/");
    }
    listExchanges(){
        window.location.assign("#/exchanges");
    }

    listSales(){
        window.location.assign("#/sales");
    }
}

const gamesListPresenter = new GamesListPresenter();

export default gamesListPresenter;