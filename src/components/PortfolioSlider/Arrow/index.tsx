import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const Arrow: FC<Props> = ({ mirror, onClick }) => {

  const { color: { secondary } } = useSelector((state: any) => state)

  const mirrorStyle = mirror ? { transform: 'rotate(180deg)', left: 0 } : { right: 0 }
  return (
    <div className={styles._main} style={{ backgroundColor: secondary, ...mirrorStyle }} onClick={onClick}>
      <img src='/images/arrow.png' />
    </div>
  )
}

export default Arrow
