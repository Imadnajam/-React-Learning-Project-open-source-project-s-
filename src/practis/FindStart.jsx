import React, { useState } from 'react'

const FindStart = ({ stars }) => {

    const [findStar, setFindStar] = useState([]);
    const [findStarName, setFindStarName] = useState('');
    function findSD(e) {
        e.preventDefault();

        
        setFindStar(stars.filter((e) => e.name === findStarName))
        
    }

  return (
      <div>
          <form onSubmit={findSD}>
              
          
              <input type='text' value={findStarName} onChange={(e) => setFindStarName(e.target.value)} />
              <button type='submit'>Filter</button>
          </form>
          <ul>
              {findStar.map((e) => (
                  <>
                   <li key={e.id}>{e.name}</li>
                   <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.profile_path} />
   
                  </>
                  
              ))}
          </ul>
      </div>
      
  )
}

export default FindStart
