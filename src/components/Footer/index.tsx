import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Footer: FC = () => {

  const { page: { footer }, color: { footer: backgroundColor, contrast } } = useSelector((state: any) => state)

  const Copyright = footer?.copyright
  const Social = orderBy(footer?.social, 'position', 'asc')

  return footer ? (
    <header className={styles._header} style={{ backgroundColor, color: contrast }}>
      <div className={styles._logoContainer}>
        <img className={styles._socialItem} src='/images/tcw.png' alt='Logo Principal' />
        <img className={styles._socialItem} src='/images/banana.png' alt='Logo Principal' />
      </div>
      <p className={styles._copyright}>{Copyright}</p>
      <div className={styles._socialContainer}>
        {Social?.map(
          (network: any, key) => <div className={styles._socialItem} key={key}><a href={network?.url}><img src={`${fallbackRestUrl}${network?.icon?.url}`} alt={network?.name} /></a></div>
        )}
      </div>
    </header>
  ) : null
}

export default Footer
