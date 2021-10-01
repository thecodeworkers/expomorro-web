import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const PromotionalText: FC<Props> = ({ data }) => {

  return (
    <div className={styles._main}>
      <p className={styles._text}>{data?.texto}</p>
    </div>
  )
}

export default PromotionalText
