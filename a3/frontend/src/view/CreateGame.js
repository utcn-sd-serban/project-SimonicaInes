import React from "react";

const CreateGame = ({ title, manufacturer, description, price, onCreate, onChange }) => (
    <div>
        <h2>Add Question</h2>
        <div>
            <label>Title: </label>
            <input value={title} data-cy="title"
                onChange={ e => onChange("title", e.target.value) } />
            <br />
            <label>Manufacturer: </label>
            <input value={manufacturer} data-cy="manufacturer"
                   onChange={ e => onChange("manufacturer", e.target.value) } />
            <br />
            <label>Description: </label>
            <input value={description} data-cy="description"
                   onChange={ e => onChange("description", e.target.value) } />
            <br />
            <label>Price: </label>
            <input value={price} data-cy="price"
                   onChange={ e => onChange("price", e.target.value) } />
            <br />

            <button onClick={onCreate} data-cy="create">Create!</button>
        </div>
    </div>
);

export default CreateGame;