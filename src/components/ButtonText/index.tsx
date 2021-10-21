import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { Props } from './interface'
import styles from './styles.module.scss'

const ButtonText: FC<Props> = ({ data }) => {

  const { color: { titles, body } } = useSelector((state: any) => state)

  return (
    <div className={styles._main}>
      <Button data={data.buttom} />
      <div className={styles._textContent}>
        <h2 className={styles._textTitle} style={{ color: titles }}>{data?.title}</h2>
        <p style={{ color: body }}>{data?.body}</p>
      </div>
    </div>
  )
}

export default ButtonText
