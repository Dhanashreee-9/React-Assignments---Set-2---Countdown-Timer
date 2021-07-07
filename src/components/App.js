import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  let [count,setCount] = useState()
  
  let increaseCount =(event)=>{
    setCount(event.target.value)
  }

  useEffect(() => {
    
    if(count == '0' || count == "" || count<=0 || isNaN(count)){
                setCount(0)
              }else{
                let x = setInterval(()=>{
                  setCount(count - 1)
                },1000)
                return()=> clearInterval(x)
              }

  }, [count])

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={increaseCount} /> sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  )
}


export default App;
