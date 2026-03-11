import React from 'react'

import './card.css'

function Card(props) {
  return (
    <div className="card">
        <img src={props.imageUrl} alt="Profile Image"></img>
        <div className="card-content">    
            <h1>{props.user}</h1>
            <p>{props.description}</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card