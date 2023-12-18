import React from 'react'

const el3 = ({color,text}) => {
  const ev1= () =>{
    document.querySelector('button').style.backgroundColor="teal";
    document.body.style.backgroundColor='yellow'

  }

  function ev2(){
    document.body.style.backgroundColor='black'
  }
  return (
    <div>
      <button onClick={ev1} onMouseOut={ev2} style={{color: color} }>{text}</button>
    </div>
  )
}


export default el3
