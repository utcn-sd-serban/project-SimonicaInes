import React from "react";

const GamesList = ({ games, title, onCreateGame, showAllGames, listExchanges, logOut, listSales }) => (
    <div>
        <h2>{ title || "Games" }</h2>
        <table border="2">
            <thead>
            <tr>
                <th>Title</th>
                <th>Manufacturer</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                games.map((game, index) => (
                    <tr key={index} data-cy="game">
                        <td>{game.title}</td>
                        <td>{game.manufacturer}</td>
                        <td>{game.description}</td>
                        <td>{game.price}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <button onClick={onCreateGame} data-cy="add">Add new Game</button>
        <br/>

        <button onClick={showAllGames}>Show User's Games</button>

        <br/>
        <button onClick={listExchanges}>Exchanges Page</button>

        <br/>
        <button onClick={listSales}>Sales Page</button>

        <br/>
        <button onClick={logOut}>Log Out</button>

    </div>
);

export default GamesList;