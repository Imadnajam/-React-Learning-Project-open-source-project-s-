
const ListeLivre = ({ Livresd }) => {
    

    return (
        <div>

            {
                Livresd && Livresd.length > 0 ? (
                    Livresd.map((e) => (
                        <li key={e.Livre}>Livre: {e.Livre} / Auteur: {e.Auteur}</li>
                    ))
                ) : (
                    <h3>We don't have any books</h3>
                )
            }


        </div>
    )
}

export default ListeLivre