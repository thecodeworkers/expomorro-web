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
    <div className={styles._main}>
      <div className={styles._desktop}>
        <Slider 
          ref={slider => (customSlider.current = slider)}
          nextArrow={ <NextArrow reference={customSlider} arrow={data?.rightArrow} />}
          prevArrow={ <PreviousArrow reference={customSlider} arrow={data?.leftArrow} /> } 
          {...settings} >
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
      <div className={styles._responsive}>
        <Slider 
          ref={slider => (customSlider.current = slider)}
          {...settingsResponsive} >
          {sliderResponsive && sliderResponsive.map((slide: any, index: any) => {
            return (
              <div key={index}>
                <div className={styles._itemContainer}>
                  {slide?.url && <img className={styles._imageSlider} src={`${fallbackRestUrl}${slide?.url}`} />}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default EventSlider
