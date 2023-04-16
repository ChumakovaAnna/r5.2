/**
 * виды поиска
 */
import React from 'react'

export default function SearchLinks({data}) {
  return (
    <div className='searchLinks'>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}
