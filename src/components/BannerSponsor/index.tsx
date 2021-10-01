import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'

const BannerSponsor: FC<Props> = ({ data }) => {
  const logos = data?.logos

  return (
    <div className={styles._main}>
      {
        logos?.map((item, index) => (
          <div key={index}>
            <img src={`${fallbackRestUrl}${item?.url}`} />
          </div>
        ))
      }
    </div>
  )
}

export default BannerSponsor
