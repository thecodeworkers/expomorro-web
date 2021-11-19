import { fallbackRestUrl } from '@utils/path'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'


const EventList: FC<Props> = ({ data }) => {

  const [width, setWidth] = useState(0)
  const boxElement = useRef(null);

  const { portfolio: { portfolios = [] } } = useSelector((state: any) => state)

  const portfolioData = data.fullList ? portfolios : portfolios.sort(() => Math.random() - Math.random()).slice(0, 9)

  const boxFunction = () => {
    setWidth(boxElement.current ? boxElement.current.clientWidth : 0)
  }

  useEffect(() => {
    boxFunction()
  }, [boxElement])

  if (typeof window !== "undefined") {
    window.addEventListener('resize', boxFunction)
  }

  return (
    <div className={styles._main}>
      {portfolioData.map((portfolio: any, index: any) => {
        return (
          <div ref={boxElement} key={index} className={styles._portfolioContainer} style={{ height: width }}>
            <div className={styles._hoverShadow}>
              <p>{portfolio?.name}</p>
            </div>
            <div className={styles._imageContainer} style={{ height: width }}>
              <img className={styles._image} src={`${fallbackRestUrl}${portfolio?.principalImage?.url}`} alt={portfolio?.principalImage?.name} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventList
