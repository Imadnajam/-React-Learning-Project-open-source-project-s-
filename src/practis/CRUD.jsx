import { React, useState } from 'react';

const CRUD = ({ stars }) => {
 


    function removeStar(item) {
        
        stars.filter((e) => e !== item);
        
     }

    return (
        <div>
            <h2> In the NExt day</h2>

            {
                stars.length > 0 ? (
                    stars.map((e) => (
                        <>
                            <li key={e.id}>{e.name}</li>
                            <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + e.profile_path} />
                            <button onClick={()=>removeStar(e)}>Remove</button>

                        </>
                    ))
                ): (
                        <h3>We dont have any stars</h3>
                )
            }


        </div>
    )
    
}


export default CRUD 