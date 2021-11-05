import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const Text: FC<Props> = ({ data }) => {

  const { color: { titles } } = useSelector((state: any) => state)

  return (
    <div className={styles._main}>
      <h4 className={styles._text} style={{ color: titles }}>{data?.text}</h4>
    </div>
  )
}

export default Text
