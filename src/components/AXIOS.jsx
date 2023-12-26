import React, { useState } from 'react';

export default function AXIOS() {
  const [users, setUsers] = useState([]);
  const [todo, setTodo] = useState([]);
  const [listT, setListT] = useState([]);

  function AfficheU() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((don) => setUsers(don));
  }

  function AfficheT(e) {
    var id = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((don) => setTodo([don]));
  }

  function AfficheLT() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((don) => setListT(don)); // Correction ici
  }

  return (
    <div>
      <br />
      <button style={{backgroundColor:'teal'}} onClick={AfficheU}>
        <h3>clic ici pour afficher La liste des users</h3>
      </button>{' '}
      <br />

      {users.map((e, i) => (
        <li key={i}>
          {' '}
          <span style={{ color: '#BE3144' }}>le Nom :</span> {e.name}{' '}
          <span style={{ color: 'teal' }}>le Prenom :</span> {e.username}{' '}
          <button value={e.id} onClick={AfficheT} style={{backgroundColor:'#005B41', color: 'white' }}>
            Affiche les todo
          </button>
          {todo.length > 0 && e.id === todo[0].userId && (
            <ul>
              {todo.map((t, j) => (
                <li key={j} style={{ position: 'relative', listStyleType: 'none' }}>
                <span style={{ position: 'absolute', top: 0, right: 100, color: 'blue' }}>Todo: {t.title}</span> 
              </li>
              
              ))}
            </ul>
          )}
        </li>
      ))}
      <br />

      <button style={{backgroundColor:'#F4F27E'}} onClick={AfficheLT}>
        <h3>clic ici pour afficher La liste des Tache</h3>
      </button>{' '}
      {listT.map((e, i) => (
        <li key={i}>
          {' '}
          <span style={{ color: '#BE3144' }}>Title :</span> {e.title}
        </li>
      ))}
    </div>
  );
}
