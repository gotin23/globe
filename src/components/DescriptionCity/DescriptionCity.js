import React from 'react'
import './DescriptionCity.css'

export default function DescriptionCity({state}) {
  return (
    <div className={`container-description ${state.animBounce}`}>
      <p className='city-description'>{state.description}</p>
    </div>
  )
}
