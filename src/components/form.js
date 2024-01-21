import {React,useState }from 'react'

const Form = () => {
    const [score , setscore] =useState('10') ;
    const [discription , Setdiscription] =useState(' ') ;
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(Number(score)<=5){
        alert('moyenne');
        return;
      }
     
      setscore('9');
    }
  return (
    <div>
      <div>
        <fieldset>
            <form onSubmit={handleSubmit}>
                <label htmlFor="score">your Score {score}  </label>
                <br/><br/>
                <input type="range" min={0} max={10}  value={score} onChange={e => setscore(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" value={discription} onChange={e => Setdiscription(e.target.value)}></textarea>
            
           <button type='submit'>submit</button>
            </form>


        </fieldset>
      </div>
    </div>
  )
}

export default Form
