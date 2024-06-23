
const ListeLivre = ({Livres}) => {
    

    return (
        <div>

            
            {
                Livres.length >0? (
            
                    Livres.map((e) => (
                        <li>Livre : {e.Livre} / Auteur : {e.Auteur }</li>
                    ))
                
                ): (
                        <h3> we dont have any Book</h3>
                )
            }
        </div>
    )
}

export default ListeLivre