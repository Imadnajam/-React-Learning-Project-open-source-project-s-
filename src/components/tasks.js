
import React from "react";
import { FaTimes } from "react-icons/fa"; // Font Awesome icon
import { IoMdCheckmark } from "react-icons/io"; // Ionicons icon
import { MdDelete } from "react-icons/md"; // Material Design icon
const task=[{
    id:1,
    nom: "Najam",
    prenom:"Imad",
    age: 19,
    verif:true
},
{
    id:2,
    nom: "Najam",
    prenom:"Anass",
    age: 16,
    verif:true
},
{
    id:3,
    nom: "Najam",
    prenom:"Yahya",
    age: 11,
    verif:false
}
]


const tasks = () => {
  return (
    <>
      {task.map((tas) => (
        <h3 key={tas.id}>
          {tas.prenom} <FaTimes style={{color:'red'}} /> <IoMdCheckmark style={{color:'green' ,cursor:'pointer'}} /> <MdDelete  />
        </h3>
      ))}
    </>
  );
};

export default tasks;


