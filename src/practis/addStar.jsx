import {useState } from 'react'


const AddStars = () => {
    const [stars, setStars] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [price, setPrice] = useState('')
   
    function inserDATA(e) {
        e.preventDefault();
        setStars([...stars,{name:name,age:age,price:price}])
        
    }

    return (
        <div>
            <form onSubmit={inserDATA}>
                
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  />
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type='submit'>Save</button>

            </form>

            <ul>
                <h2> Liste des stars</h2>
                {stars.map((star) => (
                    <li>Name :{star.name}  ; Age :{star.age}; price Gagne : {star.price } Dh</li>
                ))}
            </ul>

            
        </div>
    )
}
export default AddStars