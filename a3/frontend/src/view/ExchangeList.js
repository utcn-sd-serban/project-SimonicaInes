import React from "react";

const ExchangesList = ({ exchanges, title,username, game,offeredUsername,offeredGame, onCreateExchange, makeAnOffer, onChangeOffer}) => (
    <div>
        <h2>{ title || "Exchanges" }</h2>
        <table border="2">
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Current Customer</th>
                <th>Game</th>
                <th>Offered Game</th>
            </tr>
            </thead>
            <tbody>
            {
                exchanges.map((exchange, index) => (
                    <tr key={index} data-cy="game">
                        <td>{index}</td>
                        <td>{exchange.username}</td>
                        <td>{exchange.offeredUsername}</td>
                        <td>{exchange.game}</td>
                        <td>{exchange.offeredGame}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>


        <button onClick={onCreateExchange} data-cy="add">Add new Exchange</button>

        <br/>

        <h2>Add your offer: </h2>
            <label>Exchange Username: </label>
            <input value={username}
                   onChange={ e => onChangeOffer("username", e.target.value) } />
            <br />
            <label>Exchange Game: </label>
            <input value={game}
                   onChange={ e => onChangeOffer("game", e.target.value) } />

            <br />
            <label>Offering User: </label>
            <input value={offeredUsername}
                   onChange={ e => onChangeOffer("offeredUsername", e.target.value) } />

            <br />
            <label>Offering Game: </label>
            <input value={offeredGame}
                   onChange={ e => onChangeOffer("offeredGame", e.target.value) } />

            <br />

        <button onClick={makeAnOffer}>Make an Offer!</button>
    </div>


        );

export default ExchangesList;