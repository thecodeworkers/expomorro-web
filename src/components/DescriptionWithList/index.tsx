import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'
import List from '../List'
import { useSelector } from 'react-redux'

const DescriptionWithList: FC<Props> = ({ data }) => {

  const { color: { titles, body } } = useSelector((state: any) => state)

  const title = data?.title
  const description = data?.description
  const list = data?.point

  return (
    <section className={styles._main}>
      <div className={styles._leftSection}>
        <h2 className={styles._mainTitle} style={{ color: titles }}>{title}</h2>
        <p className={styles._description} style={{ color: body }}>{description}</p>
      </div>
      <div className={styles._rightSection}>
        <List data={list} />
      </div>
    </section>
  )
}

export default DescriptionWithList
