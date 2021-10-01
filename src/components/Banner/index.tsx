import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const Banner: FC<Props> = ({ data }) => {
  const image = data?.Imagen

  return (
    <div className={styles._main}>
      <img className={styles._bannerMain} src={`${fallbackRestUrl}${image?.url}`} />
    </div>
  )
}

export default Banner
