import { React, useState } from "react";


const GestionMateriel = () => {
    const [data, setData] = useState([]);

    const [codeMateriel, setCodeMateriel] = useState('');
    const [marque, setMarque] = useState('');
    const [dateD, setDateD] = useState('');
    const [categorie, setCategorie] = useState('');

    function saveData(e) {
        e.preventDefault();
        setData([...data, { marque: marque, datedebut: dateD, categorie: categorie, codeMateriel: codeMateriel }]);
    }
    function removeMateriel(e) {
        setData(data.filter(el => el !== e));
    }

    return (

        <div>
            <h2>Gestion Materiel</h2>

            <form onSubmit={saveData}>


                codeMateriel
                <input type="text" value={codeMateriel} onChange={(e) => setCodeMateriel(e.target.value)} />
                Marque

                <select onChange={(e) => setMarque(e.target.value)}>
                    <option value={'HR'}> HR</option>
                    <option value={'IT'}> IT</option>
                </select>
                Date début utilisation
                <input type="date" value={dateD} onChange={(e) => setDateD(e.target.value)} />
                Catégorie
                <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} />
                <button type="submit"> save</button>
            </form>

            <h3>Recupaltif des Information</h3>
            {
                data.length > 0 ? (
                    data.map(e => (
                        <ul>
                            <li>code Materiel  :{e.codeMateriel}  </li>
                            <li>La marque :{e.marque}  </li>
                            <li>Date de L ' utulisation  :{e.datedebut}  </li>
                            <li><button onClick={() => removeMateriel(e)}> Remove</button></li>
                        </ul>
                    ))
                ) : (
                    <li>Il ya pa de data</li>
                )
            }
        </div>
    )
}

export default GestionMateriel;