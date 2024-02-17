import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const bookA = useSelector(state => state.books);
  const dispatch = useDispatch();
  function removeBook() {
    dispatch({ type: 'removeBook', book :'r'})
  }
  function addBook() {
    dispatch({ type: 'addBook', book: 'r' })
  }

  return (
    <div>
      {bookA.map((e, i) => (
        <div key={i} className='movie-card'>

          <p>{e}</p>
        
          <button onClick={removeBook}>Remove</button>

        </div>
      ))}
    </div>
  )
}

export default Detail
