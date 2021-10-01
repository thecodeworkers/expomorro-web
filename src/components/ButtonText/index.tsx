import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const ButtonText: FC<Props> = ({ data }) => {

  return (
    <div className={styles._main}>
      <button className={styles._button}>
        {data?.Boton?.Texto}
      </button>
      <div className={styles._textContent}>
        <h2 className={styles._textTitle}>{data?.Titulo}</h2>
        <p>{data?.Cuerpo}</p>
      </div>
    </div>
  )
}

export default ButtonText
