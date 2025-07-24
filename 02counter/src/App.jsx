import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[count,setcount] = useState(15);
  const [message, setmessage] = useState('');
 
    function Addvalue(){
      if(count<=20){
        setcount(currentCount => currentCount + 1);
      }else{
        setmessage("you have reached the maximum limit of 20");
      }
    }
    function removeValue(){
      if(count>=1){
        setcount(currentCount => currentCount - 1);
      }else{
        setmessage("you have reached the minimum limit of 0");
      }
    };
  

  return (
    <>
     <h1>Counter App</h1>
     <button onClick ={Addvalue}>Add Value :{count}</button>
     <h3>Count Value : {count}</h3>
     <button onClick ={removeValue}>Remove Count : {count}</button>
     <p>{message}</p>
    </>
  )
}

export default App
