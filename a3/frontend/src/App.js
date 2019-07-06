import React from 'react';
import './App.css';


import { HashRouter, Switch, Route } from "react-router-dom";
import SmartGamesList from './view/SmartGamesList';
import SmartSalesList from './view/SmartSalesList';
import SmartUserGamesList from './view/SmartUserGamesList';
import SmartCreateGame from './view/SmartCreateGame';
import SmartBuyGame from './view/SmartBuyGame';
import SmartCreateSale from './view/SmartCreateSale';
import SmartLogger from './view/SmartLogger';
import SmartFilterByTitle from './view/SmartFilterByTitle';
import SmartExchangesList from "./view/SmartExchangesList";
import SmartCreateExchange from "./view/SmartCreateExchange";

const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogger} path="/" />
        <Route exact={true} component={SmartGamesList} path="/games" />
        <Route exact={true} component={SmartUserGamesList} path="/showGames" />
        <Route exact={true} component={SmartExchangesList} path="/exchanges" />
        <Route exact={true} component={SmartSalesList} path="/sales" />
        <Route exact={true} component={SmartCreateExchange} path="/create-exchange" />
        <Route exact={true} component={SmartCreateSale} path="/create-sale" />
        <Route exact={true} component={SmartFilterByTitle} path="/filter-title-question" />
        <Route exact={true} component={SmartCreateGame} path="/create-game" />
        <Route exact={true} component={SmartBuyGame} path="/buy-game" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;
