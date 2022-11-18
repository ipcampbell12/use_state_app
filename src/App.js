import React, { useState } from 'react';

function App() {

  //always pass default state
  //always return array with two values

  //hardcoded version 
  // const [count, setCount] = useState(4)

  //function version
  //only run first time component renders -> useful if initial state is more complex
  const [state, setState] = useState({ count: 4, theme: 'blue' })
  const count = state.count;
  const theme = state.theme;

  //need to use prevCount instead of count (count is only value when rendered) 
  //use a function version of setState if you want to update based on previous value
  //overrides old state, so need to use spread operator to spread out previous state
  const decCount = () => {
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 }
    })
  };

  const incCount = () => {
    setState(prevState => {
      return { ...prevState, count: prevState.count + 1 }
    })
  };

  return (
    <div className="Container">
      <h1> Update The Number</h1>
      <div className="numbers">
        <button className="button" onClick={decCount}>-</button>
        <span>{count} {theme}</span>
        <button onClick={incCount}>+</button>
      </div>

    </div>
  )
};

export default App;


//can only use hooks inside function components (not inside class components)