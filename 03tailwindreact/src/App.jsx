import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
   const  myObj = {
        username: "Aditya Dubey",
        Product:" Nike Air Max"
    }
    const myArr =[1,2,3,4,5];
  

  return (
    <>
      <h1 className ='bg-blue-500 text-white p-4 text-center rounded-xl' >Tailwind</h1>
      <Card Productname='Puma' btntext="Notify me"/>
      <Card Productname='Nike-AirForce' btntext="Purchase me"/>
    </>
  )
}

export default App
