import React from 'react'

const App = () => {
  
  const btnClick = (e) => {
    e.preventDefault()
    console.log("Button Clicked")

  }
   

  return (
    <div>
      <form onSubmit={(e)=>{btnClick(e)}}>
        <input type="text" placeholder='Enter Name' className='border-2 border-gray-300 rounded-md p-2' />
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'>Submit</button>
      </form> 
    </div>
  )
}

export default App