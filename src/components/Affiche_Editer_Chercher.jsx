import React, { useState } from "react";

const Affiche = () => {
  const [vr, setVr] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [cher,setCher]=useState('')
  const [editedData, setEditedData] = useState({
    id: "",
    nom: "",
    prenom: "",
  });
   const [listC ,setListC] = useState([
    {
      id: 1,
      nom: "najam",
      prenom: "imad",
    },
    {
      id: 2,
      nom: "lolo",
      prenom: "lili",
    },
    {
      id: 3,
      nom: "toto",
      prenom: "titi",
    },
    {
      id: 4,
      nom: "roro",
      prenom: "riri",
    },
    {
      id: 5,
      nom: "moro",
      prenom: "moro",
    },
  ]);
  function Liste() {
    return (
      <ul>
        {listC.map((e, i) => (
          <li key={i}>
            {e.id} -- {e.nom} -- {e.prenom} --------------{" "}
            <button onClick={() => Aediter(e)}>Editer</button>{" "}
            <button onClick={() => Supprimer(e.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    );
  }

  function Supprimer(id) {

    setListC(listC.filter((e)=> e.id!==id))
    alert( "l'element  :  " +  id +'  est supprimer' )
  }

  function Aediter(item) {
    setVr(true);
    setEditingId(item.id);
    setEditedData({
      id: item.id,
      nom: item.nom,
      prenom: item.prenom,
    }) 
    setListC(listC.filter((e)=> e.id!==item.id))
   
  }
  function handleInputChange(e) {

    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
   
    
  }
  function handleEditSubmit() {
    
    setListC([...listC,editedData])
    
    
    console.log("Submit Edit", editedData);
    setVr(false);
    setEditingId(null);
  }
  function CherF(){
    const lis=listC.filter((e) => e.id===cher) ;
    return(
      <div>
      <ul>
        {   lis.map((e,i)=>(
          <li key={i}> {e.id} , {e.nom} , {e.prenom}</li>
        ))  }
      </ul>
      </div>
    )
   
 }


  return (
    <div>
      <Liste />
      {vr && (
        <div  style={{backgroundColor:"teal" ,textAlign:'center' ,color:"white" ,fontSize:'1.6rem'}}> Id: <input type="text" name="id" value={editedData.id} readOnly /> 
          Nom:{" "}
          <input
            type="text"
            name="nom"
            value={editedData.nom}
            onChange={handleInputChange}
          />
          Prenom:{" "}
          <input
            type="text"
            name="prenom"
            value={editedData.prenom}
            onChange={handleInputChange}
          /><br/>
          <button style={{width:'500px',backgroundColor:"gold" ,color:'black'}} onClick={handleEditSubmit}>Modifier</button>
          <br/>
        </div>
      )}
         <div>
       <form > search :  <input type="search" value={cher} onChange={(e)=>setCher(e.target.value)} placeholder="Entrer la valeur a rechercher" /> <input type="button" value="Submit"  onClick={CherF} />
      </form></div>
    </div>
    
  );
  
};

export default Affiche;
