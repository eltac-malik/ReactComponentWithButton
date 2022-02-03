import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const [user,setUser] = useState([]);
  const [filter,setFilter] = useState("");
  
      useEffect(()=>
      {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => setUser(data))
      },[])
      
    
      const restfilter = user.filter((item) =>
      {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filter.toLowerCase()))
      })

      

      return (
        <div className="App">

    <br />

    <input placeholder='Seacrh' onChange={(e)=>{setFilter(e.target.value)}} />

    <h4>
      {restfilter.map((e,i)=> (<div key={i}>{e.username}  --  {e.name}</div>))}
    </h4>

    </div>  
  );
}  


export default App;
