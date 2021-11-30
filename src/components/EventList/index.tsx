import { fallbackRestUrl } from '@utils/path'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'
import { useRouter } from 'next/dist/client/router'
import { setLoaderShow } from '@store/actions'

const EventList: FC<Props> = ({ data }) => {

  const [width, setWidth] = useState(0)
  const boxElement = useRef(null)
  const router = useRouter()
  const dispatch = useDispatch()

  const { page: { pages }, portfolio: { portfolios = [] } } = useSelector((state: any) => state)


  const path = router?.asPath
  const splitpath = path.split('/')
  const page = (splitpath.length === 2) ? pages?.find((pag: any) => pag.uri === router?.asPath) : portfolios?.find((portfolio: any) => portfolio.uri === `/${splitpath[2]}`)
  const individualEvent = splitpath.length == 3 ? true : false

  const random1 = Math.floor(Math.random() * 100) + 1
  const random2 = Math.floor(Math.random() * 100) + 1
  const portfolioData = data.fullList ? portfolios : portfolios.sort(() => random1 - random2).slice(0, 9)

  const boxFunction = () => {
    setWidth(boxElement.current ? boxElement.current.clientWidth : 0)
  }

  useEffect(() => {
    boxFunction()
  }, [boxElement])

  if (typeof window !== 'undefined') window.addEventListener('resize', boxFunction)

  return (
    <>
      { individualEvent && <h2 className={styles._seeMoreEventsTitle}>{page?.events}</h2>}
      <div className={styles._main}>
        {portfolioData.map((portfolio: any, index: any) => {
          const difference = portfolio?.principalImage?.width > portfolio?.principalImage?.height
          return (
            <div ref={boxElement} 
              key={index} className={styles._portfolioContainer} style={{ height: width }} onClick={() => { router.push(`eventos${portfolio.uri}`); dispatch(setLoaderShow(true)) }}>
              <div className={styles._hoverShadow}>
                <p>{portfolio?.name}</p>
              </div>
              <div className={styles._imageContainer} style={{ height: width }}>
                <img className={styles._image} src={`${fallbackRestUrl}${portfolio?.principalImage?.url}`} style={{ width: (difference) ? 'auto' : '100%', height: (difference) ? '100%' : 'auto' }} alt={portfolio?.principalImage?.name} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventList
