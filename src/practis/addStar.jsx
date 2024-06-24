import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddStars = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');
    const stars = useSelector((state) => state.artists);
    const dispatch = useDispatch();

    function inserDATA(e) {
        e.preventDefault();
        dispatch({ type: 'addStar', payload: { name: name, age: age, price: price } });
        setName('');
        setAge('');
        setPrice('');
    }

    function removeA(star) {
        dispatch({ type: "removeStar", payload: star });
    }

    return (
        <div>
            <form onSubmit={inserDATA}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <button type='submit'>Save</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stars.length > 0 ? (
                        stars.map((star) => (
                            <tr key={star.name}>
                                <td>{star.name}</td>
                                <td>{star.age}</td>
                                <td>{star.price} Dh</td>
                                <td><button onClick={() => removeA(star)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No stars here now</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AddStars;
