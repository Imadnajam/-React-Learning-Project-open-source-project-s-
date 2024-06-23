import { useDispatch } from 'react-redux'
const ListeLivre = ({ Livresd }) => {

    const Dispatch = useDispatch();
    function delteOne(item) {
        Dispatch({ type: 'removeLivre', payload: item })


    }
    return (
        <div>

            {
                Livresd && Livresd.length > 0 ? (
                    Livresd.map((e) => (
                        <div>
                            <li key={e.Livre}>Livre: {e.Livre} / Auteur: {e.Auteur}</li>
                            <button onClick={()=>delteOne(e)}>Remove</button>
                        </div>

                    ))
                ) : (
                    <h3>We don't have any books</h3>
                )
            }


        </div>
    )
}

export default ListeLivre