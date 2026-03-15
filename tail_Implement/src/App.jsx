import React from 'react'

const App = () => {

 function Scrolling(elem){
  if(elem>1){
    console.log("too fast",elem)
  }
 }

  return (
    <div onWheel={(elem)=>{
      Scrolling(elem.deltaY)
    }}>
      <div className='h-screen w-full bg-amber-600'>Page1</div>
      <div className='h-screen w-full bg-green-600'>Page2</div>
      <div className='h-screen w-full bg-blue-600'>Page3</div>
    </div>
  )
}

export default App