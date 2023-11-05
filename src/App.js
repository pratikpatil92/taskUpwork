import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const decrement=()=>{
    if(count !== 0){
      let data = count -1
      setCount(data)
    }
  }
  const increment =()=>{
    let data = count + 1
    setCount(data)
  }
  return (
    <div className="App">
      <h1>Counter Task</h1>
      <div className="form">
      <button onClick={decrement}>-</button>
      <input type="number" value={count} ></input>
      <button onClick={increment}>+</button>
      </div>
      <div>

      <button onClick={()=>setCount(0)}>Reset</button>
      </div>
      

    </div>
  );
}

export default App;
