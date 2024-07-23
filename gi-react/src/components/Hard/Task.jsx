import React from 'react'
import { useLocation } from 'react-router-dom'
import './Hard.css'


export default function Task() {
    
    const location = useLocation()
    const { title } = location.state
    const { description } = location.state


  return (
    <div className="detailed_task">
    <h2>Your Detailed Task View</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
