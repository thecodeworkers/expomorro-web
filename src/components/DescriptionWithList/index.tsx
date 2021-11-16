import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { Props } from './interface'
import { createMarkup } from '@utils/common'
import styles from './styles.module.scss'

const DescriptionWithList: FC<Props> = ({ data }) => {

  const title = data?.title
  const description = data?.description
  const list = data?.point

  return (
    <section className={styles._main}>
      <div className={styles._leftSection}>
        <h2 className={styles._mainTitle}>{title}</h2>
        <div>{description}</div>
      </div>
      <div className={styles._rightSection}>
        {
          list.map((element, index) => {
            return (
              <div className={styles._listContainer} key={index}>
                <div className={styles._iconContainer}>
                  <img src={`${fallbackRestUrl}${element.icon.url}`} alt={`icon-${index}`} />
                </div>
                <div className={styles._infoContainer}>
                  <h3 className={styles._mainTitle}>{element.title}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default DescriptionWithList
