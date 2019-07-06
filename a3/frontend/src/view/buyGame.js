import React from "react";

const BuyGame = ({ username, game, quantity, price, onCreate, onChange }) => (
    <div>
        <h2>Buy Game</h2>
        <div>
            <label>vendor username: </label>
            <input value={username} data-cy="username"
                onChange={ e => onChange("username", e.target.value) } />
            <br />
            <label>Game: </label>
            <input value={game} data-cy="game"
                   onChange={ e => onChange("game", e.target.value) } />
            <br />
            <label> desired quantity: </label>
            <input value={quantity} data-cy="quantity"
                   onChange={ e => onChange("quantity", e.target.value) } />
            <br />
            <label>game Price: </label>
            <input value={price} data-cy="price"
                   onChange={ e => onChange("price", e.target.value) } />
            <br />

            <button onClick={onCreate} data-cy="create">Create!</button>
        </div>
    </div>
);

export default BuyGame;