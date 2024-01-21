import React ,{useState} from "react";
import ReactPlayer from "react-player";


 // import C from '../assets/images/camera.png';
const T = (arg) => {
    const im = {
        width: '90px',
        heightt: '90px'


    }
    
    const v1='https://www.youtube.com/watch?v=45QLb6M_6A0'
    const result = < img style={im} src={require('../assets/images/camera.png')} />;

    const objectsWithServerImages = [
        {
          name: "Coffee Cup",
          description: "A ceramic coffee cup with a handle.",
          imageSrc: "https://example.com/images/coffee_cup.jpg",
        },
        {
          name: "Laptop",
          description: "A modern laptop computer with a sleek design.",
          imageSrc: "https://example.com/images/laptop.jpg",
        },
        {
          name: "Book",
          description: "A hardcover book with a colorful dust jacket.",
          imageSrc: "https://example.com/images/book.jpg",
        },
        {
          name: "Smartphone",
          description: "A smartphone with a touchscreen display.",
          imageSrc: "https://example.com/images/smartphone.jpg",
        },
        {
          name: "Sunglasses",
          description: "Stylish sunglasses with UV protection.",
          imageSrc: "https://example.com/images/sunglasses.jpg",
        },
      ];
    
    var [obj]=useState(objectsWithServerImages);
    const donnee=obj.map((ins,index)=>{
        return  <img  src={ins.imageSrc}  alt={ins.description}/> 
       
    })

    return (

        <>
            <h2>hello {arg.name}</h2>
            <div>
                {result}
                <ReactPlayer 
                url={v1}
                playing={false}
                volume={0.5}
                
                />
            </div>
            {donnee}
           
        </>
    )
}
export default T;