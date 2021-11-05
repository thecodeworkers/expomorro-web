import React, { FC, useState } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'
import Slider from "react-slick"
import { fallbackRestUrl } from '@utils/path'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MultipleSlider: FC<Props> = ({ data }) => {

  const slider = data.Slide

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slider.length >= 4 ? 4 : slider.length,
    slidesToScroll: slider.length >= 4 ? 4 : slider.length,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
    <div className={styles._main}>
      <Slider {...settings} >
        {slider && slider.map((slide: any, index: any) => {
          return (
            <div key={index}>
              <div className={styles._itemContainer}>
                <img className={styles._imageSlider} src={`${fallbackRestUrl}${slide?.url}`} alt={slide?.name} />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MultipleSlider
