import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const items = useSelector((state) => state.Films);
    const acto = useSelector((state) => state.Artists);
    const dispatch = useDispatch();
    function removeItem(item) {
        dispatch({ type: 'removeItem', payload: item })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2>Films</h2>
                    {items && items.map((e, k) => (
                        <div className="col-md-4 mb-4" key={k}>
                            <div className="card">
                                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.poster_path} className="card-img-top" alt={e.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <button className='btn btn-danger' onClick={() => removeItem(e)}>remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Actors</h2>
                <div className="row">
                    {acto && acto.map((e, k) => (
                        <div className="col-md-4 mb-4" key={k}>
                            <div className="card">
                                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.profile_path} className="card-img-top" alt={e.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Cart
