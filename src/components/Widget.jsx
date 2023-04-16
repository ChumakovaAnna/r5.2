/**
 * универсальный виджет
 */
import React from 'react'

export default function Widget(props) {
  return (
    <div className='widget'>
      <div>{props.title}</div>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
