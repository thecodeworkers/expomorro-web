import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const Button: FC<Props> = ({ data, onClick = () => { window.open(data?.Link) }, disabled = false }) => {

  const { color: { secondary, primary } } = useSelector((state: any) => state)

  return (
    <button className={styles._button} disabled={disabled} style={{ backgroundColor: secondary, color: primary, width: data.large ? '600px' : '300px' }} onClick={onClick}>
      {data?.text}
    </button>
  )
}

export default Button
