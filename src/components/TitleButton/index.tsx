import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { Props } from './interface'
import styles from './styles.module.scss'

const TitleButton: FC<Props> = ({ data }) => {

  const { color: { titles, body } } = useSelector((state: any) => state)

  return (
    <div className={styles._main}>
      <h2 className={styles._textTitle} style={{ color: titles }}>{data?.Title}</h2>
      <Button data={{ ...data.Button, large: true }} />
      <p className={styles._textContent} style={{ color: body }}>{data?.description}</p>
    </div>
  )
}

export default TitleButton
