import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Actors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d')
            .then((response) => setActors(response.data['results']));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {actors.map((e, k) => (
                    <div className="col-md-4 mb-4" key={k}>
                        <div className="card">
                            <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.poster_path} className="card-img-top" alt={e.title} />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <button variant="primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Actors;