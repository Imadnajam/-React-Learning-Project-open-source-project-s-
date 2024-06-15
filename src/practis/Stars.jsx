import { React, useEffect, useState } from "react";
import axios from "axios";


const Stars = () => {
    
    const [starts, setStars] = useState([]);
    const [page,setPage]= useState(1)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d&page=${page}`)
            setStars(response.data.results);
        }
        fetchData();
    }, [page])
   

    

    return (
        <>
            {starts.map((star) => (
                <>
                    
                <li key={star.id}>{star.name}</li>
                    <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + star.profile_path} />
           </>
            ))}

            <button onClick={()=>setPage(page+1)}>Next</button>
        </>
    )

}

export default Stars