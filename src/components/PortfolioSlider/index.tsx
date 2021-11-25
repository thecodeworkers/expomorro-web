import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import { fallbackRestUrl } from '@utils/path'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from './Arrow'
import Button from '../Button'
import { useRouter } from 'next/dist/client/router'
import { setLoaderShow } from '@store/actions'

const PortfolioSlider: FC<Props> = ({ data }) => {

  const router = useRouter()
  const { color: { secondary, title }, portfolio: { portfolios } } = useSelector((state: any) => state)
  const [index, setIndex] = useState(1)
  const dispatch = useDispatch()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow mirror={true} />,
    beforeChange: (current, next) => setIndex(next ? next > 2 ? next - 1 : next : 1),
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
          const difference = portfolio?.principalImage?.width > portfolio?.principalImage?.height
          return (
            <div key={index}>
              <div className={styles._imageContainer}>
                <img className={styles._imageSlider} src={`${fallbackRestUrl}${portfolio?.principalImage?.url}`} alt={portfolio?.principalImage?.name} />

              </div>
              <div className={styles._info}>
                <h2 className={styles._infoTitle} style={{ color: title }}>{portfolio.name}</h2>
                <p className={styles._infoDescription} style={{ color: title }}>{portfolio.description}</p>
                {!!portfolio.content?.length && <Button data={{ text: 'Ver Mas' }} onClick={() => { router.push(`/eventos/${portfolio?.uri}`); dispatch(setLoaderShow(true)) }} />}
              </div>
            </div>
          )
        })}
      </Slider>
      <div className={styles._progressContainer}>
        <progress value={index} max={outstanding.length / 2} />
      </div>
      <style jsx>{`
        progress {
          -webkit-appearance: none;
        }
        ::-webkit-progress-bar {
          background-color: #C4C4C4;
          border-radius: 15px;
        }
        progress::-webkit-progress-value { 
          background:${secondary}; 

          border-radius: 15px;
      }
        progress[value]::-moz-progress-bar {
          background-color: ${secondary};
          border-radius: 15px;
        }
        progress[value] {
          width: 40%;
          height: 0.35rem;
          background: #C4C4C4;
          border-radius: 15px;
        }
        `}
      </style>
    </div>
  )
}

export default PortfolioSlider
