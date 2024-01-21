import {React,useEffect,useState} from 'react'

const EffectHook = () => {

   const[num,setnum] = useState(0);
   const[ver,setver] = useState(false);


    useEffect(()=>{
    setnum(1+num);
    
   },[ver])

  return (
    <div>
      <label htmlFor="">{num}</label> <br />
      <button onClick={()=>(setver(!ver))}>increment</button>
    </div>
  )
}

export default EffectHook
