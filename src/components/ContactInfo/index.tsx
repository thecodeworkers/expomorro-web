import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const ContactInfo: FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <div className={styles._main}>
      <div className={styles._line}>
      </div>
      <div>
        <div>
          <h2>{data.Titulo}</h2>
          <p>{data.Subtitulo}</p>
        </div>
        <div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
