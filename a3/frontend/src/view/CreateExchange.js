import React from "react";

const CreateExchange = ({ username, customer, game, gameOffer, onCreateExchange, onChangeExchange }) => (
    <div>
        <h2>Add Exchange</h2>
        <div>
            <label>username: </label>
            <input value={username} data-cy="title"
                   onChange={ e => onChangeExchange("username", e.target.value) } />
            <br />
            <label>customer: </label>
            <input value={customer} data-cy="salerId"
                   onChange={ e => onChangeExchange("customer", e.target.value) } />
            <br />
            <label>game: </label>
            <input value={game} data-cy="description"
                   onChange={ e => onChangeExchange("game", e.target.value) } />
            <br />
            <label>Customer: </label>
            <input value={gameOffer} data-cy="customerId"
                   onChange={ e => onChangeExchange("gameOffer", e.target.value) } />
            <br />


            <button onClick={onCreateExchange} data-cy="create">Create!</button>
        </div>
    </div>
);

export default CreateExchange;