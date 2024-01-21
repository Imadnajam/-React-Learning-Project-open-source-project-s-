import {React,useState} from 'react'



export default function TachesGestion() {
  const [Tache, SetTache] = useState('');
  const [DateT, SetDateT] = useState('');
  const [TacheList, setTacheList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Tache !== '' && DateT !== '') {
      setTacheList([...TacheList, { titre: Tache, dateT: DateT }]);
      // Clear the input fields
      SetTache('');
      SetDateT('');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Application de gestion de tâches</h2>
          <label htmlFor="tâches">Tâches</label><br />
          <input type="text" value={Tache} onChange={(e) => SetTache(e.target.value)} />  <br/>
          <label htmlFor="date">La date</label><br/>
          <input type="date" value={DateT} onChange={(e) => SetDateT(e.target.value)} /><br/>
          <button type="submit">Submit</button><br/>
        </form>
        <div>
          {TacheList.map((task, index) => (
            <div key={index}>
              <p>Tâche: {task.titre}</p>
              <p>Date: {task.dateT}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/*   // exemple 1
export default function TachesGestion(e) {
    e.preventDefault();
    const [Tache,SetTache]=useState(null);
    const [DateT,SetDateT]=useState(null);
    const [TacheList ,setTacheList]=useState({titre:'',dateT:''})
    if(!(DateT==null && Tache ==null)){

        setTacheList(...TacheList,{titre:Tache,dateT:DateT})
    }




  return (
    <div>
      <div>
        <form>
          <h2>application de gestion de tâches</h2>
            <label htmlFor="tâches" onChange={(e)=>SetTache(e.target.value)}>tâches</label> <input type="text" />
            <label htmlFor="date"  onChange={(e)=>SetDateT(e.target.value)}>La date </label><input type="date" />
            <button type="submit">submit</button>
        </form>
        <div>
            {
                TacheList
            }
        </div>


      </div>
    </div>
  )
}
*/