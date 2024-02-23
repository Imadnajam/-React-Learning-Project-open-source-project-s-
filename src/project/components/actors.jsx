import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Actors = () => {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d`)
            .then((response) => setArtist(response.data['results']))
    }, [])
    const dispatch=useDispatch()
    function addTOc(item) {
        dispatch({ type: 'addActor',payload:item})
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        artist.map((e, k) => (
                            <div className="col-md-4 mb-4" key={k}>
                                <div className="card">
                                    <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.profile_path} className="card-img-top" alt={e.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.name}</h5>
                                        <button className="btn btn-primary" onClick={() => addTOc(e)}>Send MSG</button>

                                        
                                    </div>
                                </div>
                            </div>
                  
              ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Actors
