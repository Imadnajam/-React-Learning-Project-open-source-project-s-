import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  function removeBook(item) {
    dispatch({ type: 'removeBook', payload: item });
  }

  return (
    <div className="container mt-5">
      <h2>Cart Detail</h2>
      <div className="row">
        {books.map((book, i) => (
          <div key={i} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book}</h5>
                <button onClick={() => removeBook(book)} className="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
