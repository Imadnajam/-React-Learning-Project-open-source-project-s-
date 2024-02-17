import React, { useEffect, useState } from 'react';
import Header from './EFM/header';
import axios from 'axios';
import D from './EFM/detail';
import { useDispatch } from 'react-redux';

const App = () => {
  const [Livres, setLivres] = useState([]);
  const [item, setItem] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://gutendex.com/books/?page=4")
      .then(response => {
        setLivres(response.data['results']);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  function addBook(ktab) {
    dispatch({ type: 'addBook', payload: ktab }); // Corrected payload naming
    setItem(ktab)
  }

  return (
    <div>
      <Header />
      <select>
        <option>Science Fiction</option>
        <option>Romance</option>
        <option>Mystère</option>
        <option>Fantasy</option>
      </select>
     
      <div>
        {Livres.map((e, i) => (
          <div key={i} className='movie-card'>
            <p>{e.title}</p>
            <figure className="card-banner">
              <img src={e.formats['image/jpeg']} alt={e.title} />
            </figure>
            <button onClick={() => addBook(e.title)}>Add to cart</button> {/* Fix onClick */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



/*

///////////////////// Redux Test  3  MINI Game  Change my Color !////////////////////

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style/app.css'

const App = () => {
  const [ucolor, setUcolor] = useState('')
  const [utext, setUtext] = useState('')
  const color = useSelector((state) => state.color)
  const historiqueColor = useSelector((state) => state.hestoC)
  const historiqueText = useSelector((state) => state.hestoT)
  const text = useSelector((state) => state.text)
  const dipatch = useDispatch()
  const ChangeC = () => {
    dipatch({ type: 'ChangeC', payload: ucolor })
  }
  const ChangeT = () => {
    dipatch({ type: 'ChangeT', payload: utext })
  }
  return (
    <>
      <div className="container">
        <h1 style={{ color: color }}>{text}</h1>

        <input type="text" placeholder="put a color " value={ucolor} onChange={(e) => setUcolor(e.target.value)} />
        <br />
        <input type="text" placeholder="put a text " value={utext} onChange={(e) => setUtext(e.target.value)} />
        <br />
        <button onClick={ChangeC} >Change the color</button><br />
        <button onClick={ChangeT} >Change the text</button>
        <ul>
         <h2>Color  historique</h2>
          {historiqueColor !== undefined && historiqueColor.length > 0 &&
            historiqueColor.map((e, k) => (
              <li key={k}>{e}</li>
            ))
          }


        </ul><br/>
        <ul>
         <h2>Text  historique</h2>
          {historiqueText !== undefined && historiqueText.length > 0 &&
            historiqueText.map((e, k) => (
              <li key={k}>{e}</li>
            ))
          }


        </ul>

      </div>
    </>
  )
}

export default App

























/*
import React, { useState } from "react";
import './style/app.css';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [number1, setNumber] = useState(0);
  const film = useSelector((state) => state.film);
  const N = useSelector((state) => state.number);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch({ type: 'submit', payload: number1 });
  };

  return (
    <div>
      <div className="container">
        <h1>Enter a number and get FILM</h1>
        <br />
        <input type="text" value={number1} onChange={(e) => setNumber(e.target.value)} />
        <h2>{film}</h2>
        <h2>{N}</h2>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default App;













/*
///////////////////// Redux Test  2  MINI CALCULE////////////////////
import {React,useState} from "react";
import './style/app.css';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const resultat =useSelector((state)=>state.resultats)
  const operation =useSelector((state)=>state.operation)

  const [nb1,setNb1]=useState(0)
  const [nb2,setNb2]=useState(0)
  const dis =useDispatch()
  const SOMME=()=>{
    dis({type:'SOMME',payload:[nb1,nb2]})
  }
  const SOUSTRA=()=>{
    dis({type:'SOUSTRA',payload:[nb1,nb2]})
  }
  const MULTIP=()=>{
    dis({type:'MULTIP',payload:[nb1,nb2]})
  }
  const DIVIS=()=>{
    dis({type:'DIVIS',payload:[nb1,nb2]})
  }


  return (
    <>
      <div className="container">
        <h1 className="Mini">Mini Calcule</h1>

        <input type="text" placeholder="Entrer le 1 Nombre" value={nb1}  onChange={(e)=>setNb1(e.target.value)}/>
        <br />
        <input type="text" placeholder="Entrer le 2 Nombre" value={nb2}  onChange={(e)=>setNb2(e.target.value)} />
        <br />
        <div className="container2">
          <button onClick={SOMME}> + </button>
          <button onClick={SOUSTRA}> - </button>
          <button onClick={MULTIP}> * </button>
          <button onClick={DIVIS}> % </button>
        </div>

        <h2>{operation} = {resultat}</h2>


      </div>
    </>
  )
}
export default App









/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  const [pas, setPas] = useState(0);
  const nb = useSelector((state) => state.counter);
  const dis = useDispatch()
  const Increment = () => {
    dis({ type: 'INC' })
  }
  const Decrement = () => {
    dis({ type: 'DEC' })
  }
  useEffect(() => {
    dis({ type: 'ADDN', payload: pas })
  }, [pas])


  return (

    <div>
      <h1>
        hello {nb}
      </h1>

      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
      <input type='number' value={pas} onChange={(e) => setPas(e.target.value)} />



    </div>

  );
};

export default App;


/*
////////////  UseEfect

import React from 'react'
import EffectHook from './components/effectHook'

export default function App() {
  return (
    <div>
      <EffectHook />
    </div>
  )
}
*/
/*
import TachesGestion from './components/tachesGestion'


const App = () => {
  return (
    <div>
      <TachesGestion />
    </div>
  )
}

export default App



*/

////////////////  T3   /////////////

// Context Api
/*
import React from "react";
import { UserProvider, useUsers } from "./components/contextApi";
function App() {
    const {users}=useUsers()
  return (
      <div className="App">
        <h2 style={{color:'red'}}> your name is {users.name}</h2>
        {users.email}
      </div>
  );
}
const Root = () => {
  return (
    <div>
      <UserProvider>
      <App/>
      </UserProvider>
    </div>
  )
}
export default Root;


/////////////////

*/

////////////////  T1   /////////////
// base 1

/*
import M1 from "./components/el1";
import M2 from './components/el2';
import React from "react";
import M3 from './components/el3';
import M4 from './components/tasks';

const  EX0=()=>{
  return(
  <imad>
    <h1> hello kkk </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur maxime ullam, non necessitatibus numquam dolorum, magnam temporibus repudiandae in aspernatur tempore sint dolorem distinctio! Omnis suscipit eum qui sequi!</p>
  </imad>
  )
}
function test1() {
  let Name = "Imad";
  let age = 19;

  return (

    <div className="test1">
       <EX0 />
     <h1>hello {Name}</h1>
      <br />
      <h2>{age >= 18 ? "vous êtes adulte" : "petit"}</h2>
      <M1/>
      <br />
      <M2 Name="imad"  />
      <M3  color='red' text='Add1'/>

     {
      <M3  color='green' text='Add2'/>
      <M3  color='teal' text='Add3'/>
      <M3  color='yellow' text='Add4'/>

    }
    <M4/>
    <EX0/>
    </div>
  );
}
export default test1;

  ///  Methode 2


class test2 extends React.Component{
  render(){
     return <h1>k</h1>
  }
}

export default test2; */

////////////////  T2   /////////////
// base 2
/*
import T from "./components/css-jsx";
import N from "./components/nav";
import C from "./components/event";
import "./components/style.css";
import F from './components/form';
import F0 from './components/form0';

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
const Test1 = () => {
  
  const [color, setcolor] = React.useState("yellow");
  function change() {
    setcolor("red");
  }
  return (
    <>
      <div className="main-nav">
        <Link to="/navbar"> navbar</Link>
        <Link to="/home"> Home</Link>
        <Link to="/Count"> Style</Link>
      </div>

      <Routes>
        <Route
          path="/navbar"
          element={
            <>
              <N color={color} />
              <button className="btn" onClick={change}>
                {" "}
                change the color
              </button>
            </>
          }
        />

        <Route path="/home" element={
        <>
    
          <T name='imad' />
        
        
        <F />

        </>
      } />
        <Route path="/Count" element={
        <><C />
        <F0 />
        </>
        
      } />
      </Routes>
    </>
  );
};
export default Test1;

*/
