import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const items = useSelector((state) => state.Films);
  return (
      <div>
          <div className="container">
              <div className="row">
          {
              items.map((e, k) => (
                  <>
                      <div className="col-md-4 mb-4" key={k}>
                          <div className="card">
                              <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.poster_path} className="card-img-top" alt={e.title} />
                              <div className="card-body">
                                  <h5 className="card-title">{e.title}</h5>
                                  <button variant="danger">remove</button>
                              </div>
                          </div>
                      </div>
                  </>
              ))
                  }
              </div>
              </div>
    </div>
  )
}

export default Cart
