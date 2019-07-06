import React from "react";

const CreateSale = ({ username, game, quantity, price, onCreate, onChange }) => (
    <div>
        <h2>Add Sale</h2>
        <div>
            <label>username: </label>
            <input value={username} data-cy="username"
                onChange={ e => onChange("username", e.target.value) } />
            <br />
            <label>Game: </label>
            <input value={game} data-cy="game"
                   onChange={ e => onChange("game", e.target.value) } />
            <br />
            <label>quantity: </label>
            <input value={quantity} data-cy="quantity"
                   onChange={ e => onChange("quantity", e.target.value) } />
            <br />
            <label>Price: </label>
            <input value={price} data-cy="price"
                   onChange={ e => onChange("price", e.target.value) } />
            <br />

            <button onClick={onCreate} data-cy="create">Create!</button>
        </div>
    </div>
);

export default CreateSale;