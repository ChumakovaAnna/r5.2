/**
 * Большой рекламный баннер
 */
import React from 'react'

export default function BannerBig({data}) {
  return (
    <div className='bannerBig'>
      <a href={data.link}>
        <img src={data.img} alt='banner'></img>
      </a>
    </div>
  )
}
