import React, { FC, useRef } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import { fallbackRestUrl } from '@utils/path'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'

const EventSlider: FC<Props> = ({ data }) => {
  console.log("slider", data)
  const slider = data?.galery
  const sliderResponsive = data?.responsiveImage
  const customSlider = useRef();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const settingsResponsive = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  
  return (
    <>
      <div className={styles._main}>
        <Slider 
          ref={slider => (customSlider.current = slider)}
          nextArrow={ <NextArrow reference={customSlider} arrow={data?.rightArrow} />}
          prevArrow={ <PreviousArrow reference={customSlider} arrow={data?.leftArrow} /> } 
          {...settings} >
          {slider && slider.map((slide: any, index: any) => {
            return (
              <div key={index}>
                <img className={styles._slide} src={`${fallbackRestUrl}${slide?.url}`} alt={slide?.name} />
              </div>
            )
          })}
        </Slider>
      </div>
      <div className={styles._mainResponsive}>
        <Slider 
          {...settingsResponsive} >
          {sliderResponsive && sliderResponsive.map((slide: any, index: any) => {
            return (
              <div key={index}>
                <img className={styles._slide} src={`${fallbackRestUrl}${slide?.url}`} alt={slide?.name} />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default EventSlider
