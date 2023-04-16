/**
 * Крусы валют
 */
import React from 'react'

export default function Course({data}) {
  return (
    <div className='courseBlock'>
    {data.map((item, index) => (
      <div className='course' key={index}>
        <div>{item.title}</div>
        <div>{item.rate}</div>
        <div>{item.changes}</div>
      </div>
    ))}
    </div>
  )
}
