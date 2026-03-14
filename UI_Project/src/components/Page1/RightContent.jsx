import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id ="right" className="h-full w-2/3 flex gap-6  rounded-4xl flex-nowrap overflow-x-auto p-8 overflow-x-auto">
      {props.users.map((elem, index) => (
        <RightCard key={index} id={index+1} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag} />
      ))}
    </div>
  )
}

export default RightContent