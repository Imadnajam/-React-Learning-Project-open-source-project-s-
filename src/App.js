import { React, useState } from 'react';
import axios from 'axios';
import StarsC from './practis/Stars';
import StarsFC from './practis/FindStart';

import { Routes, Route, Link } from 'react-router-dom';
import AddStars from './practis/addStar';
import GestionMateriel from './practis/GestionMateriel';
import CRUD from './practis/CRUD';
import { useSelector } from 'react-redux';
import ADLivre from './practis/AjoutLivre';
import LisLivre from './practis/ListeLivres';

export default function App() {
  const Livres = useSelector((state) => state.Data);
  const [stars, setStars] = useState([]);
  const fetApi = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d");
    setStars(response.data.results)
  }
  fetApi()

  return (
    <>
      <Link to={"/stars"}>stars</Link>
      <Link to={"/findS"}>Find Stars By Name</Link>
      <Link to={"/addStar"}>add Star </Link>
      <Link to={"/Materiel"}>Gestion Materiel</Link>
      <Link to={'/CRUD'}> CRUD STARS</Link>
      <Link to={'/Bibliotheque'}> GEstiont Livres</Link>


      <Routes>
        <Route path='/stars' element={<StarsC stars={stars} />} />
        <Route path='/findS' element={<StarsFC stars={stars} />} />
        <Route path='/CRUD' element={<CRUD stars={stars} />} />
        <Route path='/addStar' element={<AddStars />} />
        <Route path='/Materiel' element={<GestionMateriel />} />

        <Route path='/Bibliotheque' element={<div>
          <ADLivre />
          <LisLivre Livresd={Livres} />
        </div>} />





      </Routes>
    </>
  )

}


