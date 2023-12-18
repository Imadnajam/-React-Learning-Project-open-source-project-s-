import { React, useState, useEffect } from 'react';

const FetchData = () => {
  const [movies, setMovies] = useState([]);
  const [List, setList] = useState(1);

  const fetchMoviesData = () => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d&page=${List}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  useEffect(() => {
    fetchMoviesData();
  }, [List]);
  const prevPage = () => {
    if (List > 1) {
      return setList(List - 1)
    }
    else {
      return setList(List)
    }

  }
  function nextPage() {

    return setList(List + 1)


  }

  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>

      {movies.map((movie, index) => (
        <div key={index}>
          <h4>{movie.title}</h4>
          <img src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.profile_path} alt={movie.title} />
          <p style={{ color: 'teal' }}>{movie.name}</p>
          
        </div>
      ))}


      <button onClick={prevPage}>Previous</button> <span style={{ color: 'red' }}>Page :{List}</span> <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default FetchData;
