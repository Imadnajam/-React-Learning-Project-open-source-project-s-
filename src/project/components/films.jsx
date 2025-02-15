import React, { useState, useEffect } from 'react'; // Importing necessary React hooks
import axios from 'axios'; // Importing axios for making API calls
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux for dispatching actions




const Films = () => {
    const [films, setfilms] = useState([]);
    const [pageF, setPageF] = useState(1)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d&page=${pageF}`)
            .then((response) => setfilms(response.data['results']));
    }, [pageF]);

    const dispatch = useDispatch();
    function addTOc(item) {
        dispatch({ type: 'AddToCart', payload: item })

    }
    function Previos() {
        if (pageF >= 1) {
            setPageF(pageF - 1)
        }
    }

    return (
        <div className="container">
            <div className="row">
                {films.map((e, k) => (
                    <div className="col-md-4 mb-4" key={k}>
                        <div className="card">
                            <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.poster_path} className="card-img-top" alt={e.title} />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <button className="btn btn-success" onClick={() => addTOc(e)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container">
                <div className="text-center">
                    <button className="btn btn-primary mr-2" onClick={Previos}>Previous</button>
                    <button className="btn btn-info" onClick={() => setPageF(pageF + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Films;
