import './App.css';
import Button from "./components/Button.js"
import Input from "./components/Input.js"
import Result from "./components/Result.js"
import {useState} from 'react'

function App() {

  const [name,setName] = useState("")
  const [btnname,setSetname] = useState("")

  const click = () => setSetname(name)

  return (
    <div className="App">
      <br />
    <Input value={name} setname={setName} />
      <br />
    <Button addname = {click}/>
      <br />    
    <Result value={btnname} />
    </div>
  );
}

export default App;
