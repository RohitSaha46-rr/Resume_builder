import React from 'react'
import './head.css';
const Head = (props) => {
  return (
    <div className='head'>
    <h1>{props.title}</h1>
    <p>Please provide accurate and clear description wherever necessary.</p>
    </div>
  )
}

export default Head