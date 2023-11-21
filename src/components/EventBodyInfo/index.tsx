import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const EventBodyInfo: FC<Props> = ({ data }) => {

  const title = data?.title
  const description1 = data?.description1
  const description2 = data?.description2
  const isVisible = data?.visible

  return (
    <>
      {
        isVisible && 
        <section className={styles._main}>
          <div className={styles._boxDescription}>{title}</div>
          <div className={styles._boxDescription}>{description1}</div>
          <div className={styles._boxDescription}>{description2}</div>
        </section>
      }
    </>
  )
}

export default EventBodyInfo
