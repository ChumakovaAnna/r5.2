import React from 'react';
import News from './News';

export default function NewsLink({data, news}) {
  return (
    <div className=''>
      {data.map((item, index) => (
        <button key={index} href='#' className='newsLink'>{item}</button>
      ))}
      <div className='newsBlock'>
        <News news={news}></News>
      </div>
    </div>
  )
}
