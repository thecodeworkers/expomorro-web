import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const ImageWithIconList: FC<Props> = ({ data }) => {
  // console.log("data", data)

  const image = data?.outstanding
  const imageResponsive = data?.responsive
  const title = data?.title
  const list = data?.values

  return (
    <section className={styles._main}>
      <div className={styles._leftSection}>
        <div className={styles._imageContainer}>
          <div className={[styles._imageMain, (imageResponsive?.url) ? styles._imageDesktop : ''].join(' ')} style={{backgroundImage: `url(${fallbackRestUrl}${image.url})` }}  />
          { imageResponsive?.url && <div className={[styles._imageMain, styles._imageMobile].join(' ')} style={{backgroundImage: `url(${fallbackRestUrl}${imageResponsive.url})`}} />}
        </div>
      </div>
      <div className={styles._rightSection}>
        <h2 className={styles._title}>{title}</h2>
        <div className={styles._listContainer}>
          {
            list.map((element, index) => {
              console.log("element", element)
              return (
                <div className={styles._elementContainer} key={index}>
                  <img src={`${fallbackRestUrl}${element.icon?.url}`} alt={`icon-${index}`} />
                  <h2 className={styles._mainTitle}>{element.title}</h2>
                  <p className={styles._description}>{element.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ImageWithIconList
