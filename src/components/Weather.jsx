/**
 * виджет погоды
 */
import React from 'react'

export default function Weather({data}) {
  return (
    <div className='widget weather'>
      <div>
        <img src={data.img} alt='weather'></img>
        <div>{data.now}</div>
      </div>
      <div>
        <div>утром: {data.morning}</div>
        <div>днем: {data.day}</div>
      </div>
    </div>
  )
}
