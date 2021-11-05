import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const Input: FC<Props> = ({ data, onChange }) => {

  const { color: { titles } } = useSelector((state: any) => state)

  return (
    <input className={styles._input} style={{ borderBottomColor: titles }} name={data?.name} onChange={(data) => onChange(data)} placeholder={data?.placeholder} type={data?.Type} />
  )
}

export default Input
