import { React, useState } from 'react';
import { useDispatch } from 'react-redux';


const AjoutLivre = () => {
    
    
    const [livreA, setLivre] = useState('');
    const [auteur, setAuteur]=useState('')

    const dispatch = useDispatch();
    function addLivre(e) {
        e.preventDefault();
        const data = { Livre: livreA, Auteur: auteur };
        dispatch({ type: 'AddNewLivre', payload: data });
    }

    return (
        
        <div>
            <form onSubmit={addLivre}>
                
                Livre : <input type='text' value={livreA} onchange={(e) => setLivre(e.target.value)} />
                Auteur : <input type='text' value={auteur} onchange={(e)=>setAuteur(e.target.value)} />

                <button type='submit'>Ajouter </button>
            </form>
        </div>
    )

}
