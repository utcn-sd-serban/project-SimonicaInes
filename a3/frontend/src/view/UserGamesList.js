import React from "react";

const GamesList = ({ games, title, onCreateGame,onFilterByTitleGame,
                           onFilterByTagGame, swapToFilter }) => (
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

    </div>
);

export default GamesList;