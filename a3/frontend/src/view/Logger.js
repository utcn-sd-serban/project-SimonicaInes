import React from "react";

const Logger = ({username, password, onChange, login }) => (
    <div>
        <h2>LOGIN: </h2>
        <div>
            <label>Username: </label>
            <input value={username} data-cy="username"
                onChange={ e => onChange("username", e.target.value) } />
            <br />
            <label>Password: </label>
            <input value={password} data-cy="password"
                   onChange={ e => onChange("password", e.target.value) } />
            <br />

            <button onClick={login} data-cy="Log in">Create!</button>
        </div>
    </div>
);

export default Logger;