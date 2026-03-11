import React from 'react'

import Card from './components/card'

function App() {
  return (
    <div  className="card-container">

      <Card user="Aditya Dubey" description="Frontend Developer passionate about React and building beautiful UI." imageUrl="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1772311993942-872095c6a227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" />
       <Card user="John Doe" description="Backend Developer with expertise in Node.js and Python." imageUrl="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1772311993942-872095c6a227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" />
        

    </div>
  )
}

export default App