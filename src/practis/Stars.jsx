import { React, useEffect, useState } from "react";
import axios from "axios";


const Stars = ({stars}) => {
    

    

    return (
        <>
            {stars.map((star) => (
                <>
                    
                <li key={star.id}>{star.name}</li>
                    <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + star.profile_path} />
           </>
            ))}

        </>
    )

}

export default Stars