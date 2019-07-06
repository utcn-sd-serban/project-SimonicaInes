import React from "react";

const SalesList = ({ sales, title, onCreateSale, buyGame }) => (
    <div>
        <h2>{ title || "Sales" }</h2>
        <table border="2">
            <thead>
            <tr>
                <th>Username</th>
                <th>Game</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                sales.map((sale, index) => (
                    <tr key={index}>
                        <td>{sale.username}</td>
                        <td>{sale.game}</td>
                        <td>{sale.quantity}</td>
                        <td>{sale.price}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <button onClick={onCreateSale} >Add new Sale</button>
        <br/>

        <button onClick={buyGame}>buyGame</button>

        <br/>


    </div>
);

export default SalesList;