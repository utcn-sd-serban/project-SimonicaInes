const BASE_URL = "http://localhost:8080";

export default class RestClient {
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    loadAllGames() {
        return fetch(BASE_URL + "/games", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createGame(title, manufacturer, description, price) {
        return fetch(BASE_URL + "/games", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                manufacturer: manufacturer,
                description:description,
                price:price
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    showAllGames(user){
        return fetch(BASE_URL + "/showGames", {
            method: "GET",
            body: JSON.stringify({
               username:user
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    loadAllExchanges() {
        return fetch(BASE_URL + "/exchanges", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createExchange(username, customer, game, gameOffer) {
        return fetch(BASE_URL + "/exchanges", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                offeredUsername:customer,
                game:game,
                offeredGame:gameOffer
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    createOffer(username, game, offeredUsername,offeredGame) {
        return fetch(BASE_URL + "/exchanges", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                game: game,
                offeredUsername: offeredUsername,
                offeredGame: offeredGame
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    createSale(username, game, quantity, price) {
        return fetch(BASE_URL + "/sales", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                game: game,
                quantity:quantity,
                price:price
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    loadAllSales() {
        return fetch(BASE_URL + "/sales", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    buyGame(username, game, quantity, price){
        return fetch(BASE_URL + "/update-sales", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                game: game,
                quantity:quantity,
                price:price
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
}