
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  useEffect(() => {
    console.log("just mounted this component")
  }, [])
  const [count, setCount] = useState(0)
  const addCount = () =>{
    let sum = count + 1
    setCount(sum)
  }
  const minusCount = () =>{
    let minus = count - 1
    setCount(minus)
  }

  return (
    <div className="App">
      <h1>React Likes</h1>
      <p>{count}</p>
      <button onClick={addCount}> + Likes</button>
      <button onClick={minusCount}> - Dislikes</button>

    
    </div>
  );
}

export default App;
