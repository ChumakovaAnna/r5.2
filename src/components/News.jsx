import React from 'react'

export default function News({news}) {
  return (
    <div className='news'>
      {news.map(item => (
        <a key={item.id} href={item.link} className='new'>
          <img src={item.icon} alt='icon'></img>
          {item.text}
        </a>
      ))}
    </div>
  )
}
