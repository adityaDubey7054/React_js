import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(10000)
  const [showText,setShowText] = useState(false)
  const [num,setNum] = useState({User:"Aditya",Age:22})


  function BtnClick(){
    const newNum = {...num}
    newNum.User = "Anish Dubey"
    newNum.Age = 23
    setNum(newNum)

  }



  function incrementCount(){
    setCount(count+1)
  }

  function decrementCount(){
    setCount(count-1)
  }

  function toggleText(){
    setShowText(!showText)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">

      {/* {showText && (
        <h1 className="text-4xl font-bold mb-6">
          Hi Everyone, Today my Step Count is : {count}
        </h1>
      )}

      <div className="flex gap-4">
        <button
          onClick={toggleText}
          className="px-8 py-4 text-2xl bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition"
        >
          Show Text
        </button>
      </div> */}

      <h1 className='text-4xl font-bold mb-6 '>{num.User} is {num.Age} years old.</h1>
      <button onClick={BtnClick} className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition">Update Age</button>

    </div>
  )
}

export default App
