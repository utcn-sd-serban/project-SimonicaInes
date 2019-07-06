import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";
import WebSocketListener from "../ws/WebSocketListener";


const listener = new WebSocketListener("serban", "123");

class Model extends EventEmitter {
    constructor() {
        super();
        this.game = new RestClient();
        this.state = {
            games: [],

            newGame: {
                title: "",
                manufacturer: "",
                description: "",
                price: ""
            },

            username: "",
            password: "",

            gamesForUser: [],

            exchanges: [],

            newExchange: {
                username: "",
                offeredUsername: "",
                game: "",
                offeredGame: "",
                gameOffered: ""
            },

            newOffer:{
                username:"",
                game:"",
                offeredUsername: "",
                offeredGame:""
            },

            sales:[],
            newSale:{
                username:"",
                game:"",
                quantity:"",
                price:""
            },

            makeSale:{
                username:"",
                game:"",
                quantity:"",
                price:""
            }

        };
    }

    login(){
        this.game = new RestClient(this.state.username,this.state.password);
    }


    loadGames() {
        return this.game.loadAllGames().then(games => {
            this.state = { 
                ...this.state,
                games: games
            };
            this.emit("change", this.state);
        })
    }

    addGame(title, manufacturer, description, price) {
        return this.game.createGame(title, manufacturer, description, price)
            .then(game => this.appendGame(game));
    }
    showAllGames() {
        return this.game.showAllGames(this.state.username)
            .then(games => this.gamesForUser.concat([games]));
    }
    appendGame(game) {
        this.state = { 
            ...this.state, 
            games: this.state.games.concat([game])
        };
        this.emit("change", this.state);
    }

    changeNewGameProperty(property, value) {
        this.state = {
            ...this.state,
            newGame: {
                ...this.state.newGame,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }

    swapToFilter(property, value){
        this.state={
            ...this.state,
            [property]:value
        };
        this.emit("change", this.state);
    }
    addToFIlteredGames(title, manufacturer, description, price){
        this.state = {
            ...this.state,
            filteredGames: this.state.filteredGames.concat([{
                title: title,
                manufacturer: manufacturer,
                description: description,
                price: price

            }])
        };
    }
    clearFilters(){
        this.state = {
            ...this.state,
            filteredGames: []
        };
    }

//------------------------------------------------ EXCHANGES
    loadExchanges() {
        return this.game.loadAllExchanges().then(exchanges => {
            this.state = {
                ...this.state,
                exchanges: exchanges
            };
            this.emit("change", this.state);
        })
    }

    addExchange(username, customer, game, gameOffer) {
        return this.game.createExchange(this.state.username, customer, game, gameOffer)
            .then(exchange => this.appendExchange(exchange));
    }



    appendExchange(exchange) {
        this.state = {
            ...this.state,
            exchanges: this.state.exchanges.concat([exchange])
        };
        this.emit("change", this.state);
    }

    changeNewExchangeProperty(property, value) {
        this.state = {
            ...this.state,
            newExchange: {
                ...this.state.newExchange,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


    changeNewOfferProperty(property, value) {
        this.state = {
            ...this.state,
            newOffer: {
                ...this.state.newOffer,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    addOffer(username, customer, game, gameOffer) {
        return this.game.createOffer(username, customer, game, gameOffer)
            .then(exchange => this.appendExchange(exchange));
    }

    //------------------------------------------------ SALES
    loadSales(){
        return this.game.loadAllSales().then(sales => {
            this.state = {
                ...this.state,
                sales: sales
            };
            this.emit("change", this.state);
        })
    }

    appendSale(sale) {
        this.state = {
            ...this.state,
            sales: this.state.exchanges.concat([sale])
        };
        this.emit("change", this.state);
    }

    addSale(username, game, quantity, price) {
        return this.game.createSale(this.state.username, game, quantity, price)
            .then(sale => this.appendSale(sale));
    }

    changeNewSaleProperty(property, value) {
        this.state = {
            ...this.state,
            newSale: {
                ...this.state.newSale,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
//----------------------------------------------------- BUY GAME
    buyGame(username, game, quantity, price){
        return this.game.buyGame(username, game, quantity, price)
            .then(makeSale => this.appendSale(makeSale));
    }

    changeNewBuyGameProperty(property, value){
        this.state = {
            ...this.state,
            makeSale: {
                ...this.state.makeSale,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

}





const model = new Model();

listener.on("event", event => {
    if (event.type === "GAME_CREATED") {
        model.appendGame(event.game);
    }
    else if(event.type === "EXCHANGE_CREATED"){
        model.appendExchange(event.exchange);

    }
    else if(event.type === "SALE_CREATED"){
        model.appendSale(event.sale);

    }

});


export default model;