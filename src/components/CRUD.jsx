import React, { useState } from 'react';
const CRUD = () => {
    const [Matricul, SetMatricul] = useState('');
    const [nom, Setnom] = useState('');
    const [Prenom, SetPrenom] = useState('');
    const [Salaire, SetSalaire] = useState('');
    const [listClients, SetlistClients] = useState([]);
    function addClienst(e) {
        e.preventDefault();
        const flag = listClients.find((e) => e.Matricul === Matricul);

        if (!flag) {
            SetlistClients(
                [
                    ...listClients,
                    { Matricul: Matricul, nom: nom, Prenom: Prenom, Salaire: Salaire }
                ]);
        }
        SetMatricul('');
        Setnom('');
        SetPrenom('');
        SetSalaire('');
    }
    function DeleteLigne(mle) {
        SetlistClients(listClients.filter(el => el.Matricul !== mle.target.value))
    }

    return (
        <div>
            <div>
                <h1>Gestions des clients</h1>
                <form onSubmit={addClienst}>
                    Matricul: <input type="number" name='Matricul' value={Matricul} onChange={(e) => SetMatricul(e.target.value)} required /><br />
                    Nom: <input type="text" name='Nom' value={nom} onChange={(e) => Setnom(e.target.value)} required /><br />
                    Prenom: <input type="text" name='Prenom' value={Prenom} onChange={(e) => SetPrenom(e.target.value)} required /><br />
                    Salaire: <input type="number" min={3000} value={Salaire} onChange={(e) => SetSalaire(e.target.value)} required /><br />
                    <input type="submit" required />
                </form>

                <h2>Liste des clients </h2>
                <table border={1}>
                    <thead><th>Matricul</th><th>nom</th><th>Prenom</th><th>Salaire</th></thead>
                    <tbody>
                        {listClients.length===0?<p style={{color:'white',background:'red'}} >aucune données</p>:listClients.map((e, k) => {
                            return (
                                <tr key={k}>
                                    <td>{e.Matricul}</td><td> {e.nom} </td> <td>{e.Prenom}</td> <td>{e.Salaire} MAD </td>  <td><button style={{background:'red',color:'white'}} onClick={DeleteLigne} value={e.Matricul}>Supprimer</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default CRUD;
