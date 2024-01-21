import React from 'react';
import {useSelector } from 'react-redux';


const App = () => {
  const nb = useSelector((state) => state.counter);

  return (
    
      <div>
        <h1>
          hello {nb}
        </h1>
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
