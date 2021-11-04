import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'
import Slider from "react-slick"
import { fallbackRestUrl } from '@utils/path'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from './Arrow'
import Button from '../Button'

const PortfolioSlider: FC<Props> = ({ data }) => {

  const { color: { titles }, portfolio: { portfolios } } = useSelector((state: any) => state)
  const [index, setIndex] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow mirror={true} />,
    beforeChange: (current, next) => setIndex(next),
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

  const outstanding = portfolios.filter((port: any) => port.outstanding)

  return (
    <div className={styles._main}>
      <Slider {...settings} >
        {outstanding && outstanding.map((portfolio: any, index: any) => {
          return (
            <div key={index}>
              <div className={styles._imageContainer}>
                <img className={styles._imageSlider} src={`${fallbackRestUrl}${portfolio?.principalImage?.url}`} alt={portfolio?.principalImage?.name} />
              </div>
              <div className={styles._info}>
                <h2 className={styles._infoTitle}>{portfolio.name}</h2>
                <p className={styles._infoDescription}>{portfolio.description}</p>
                <Button data={{ text: 'Ver Mas' }} />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default PortfolioSlider
