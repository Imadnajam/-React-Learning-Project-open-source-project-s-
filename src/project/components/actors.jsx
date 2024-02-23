import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Actors = () => {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d`)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Actors
