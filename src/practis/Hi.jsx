import React, { useState } from 'react';

const Hi = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    function saveUser(e) {
        e.preventDefault();
        if (name.trim()) {
            setNames([...names, name]);
            setName('');
        } else {
            alert('Please enter a name.');
        }
    }

    return (
        <>
            <h1>Hello {name}</h1>

            <form onSubmit={saveUser}>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Save</button>
            </form>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    );
};

export default Hi;
