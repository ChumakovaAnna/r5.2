/**
 * мелкий рекламный баннер
 */
import React from 'react'

export default function BannerSmall({data}) {
  return (
    <div className="bannerSmall">
      <img alt='small banner' src={data.img}></img>
      <div>{data.title}</div>
      <div>{data.text}</div>
      <button href={data.link}>на сайт</button>
    </div>
  )
}
