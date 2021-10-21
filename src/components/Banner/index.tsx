import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const Banner: FC<Props> = ({ data }) => {
  const image = data?.image
  const imageResponsive = data?.imageResponsive
  const fullWidth = data?.fullWidth

  return (
    <div className={styles._main} style={(fullWidth) ? {} : { padding: '0 3%' }}>
      <img className={[styles._bannerMain, (imageResponsive?.url) ? styles._bannerDesktop : ''].join(' ')} src={`${fallbackRestUrl}${image?.url}`} />
      {imageResponsive?.url && <img className={[styles._bannerMain, styles._bannerMobile].join(' ')} src={`${fallbackRestUrl}${imageResponsive?.url}`} />}
    </div>
  )
}

export default Banner
