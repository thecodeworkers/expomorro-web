import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Footer: FC = () => {

  const router = useRouter()
  const { page: { footer } } = useSelector((state: any) => state)

  const Copyright = footer?.Copyright
  const Social = orderBy(footer?.Social, 'Posicion', 'asc')

  return footer ? (
    <header className={styles._header}>
      <div className={styles._logoContainer}>
        <img className={styles._socialItem} src='/images/tcw.png' alt="Logo Principal" />
        <img className={styles._socialItem} src='/images/banana.png' alt="Logo Principal" />
      </div>
      <p>{Copyright}</p>
      <div className={styles._socialContainer}>
        {Social?.map(
          (network: any, key) => <div className={styles._socialItem} key={key}><img src={`${fallbackRestUrl}${network.Icon?.url}`} alt={network.Name} /></div>
        )}
      </div>
    </header>
  ) : null
}

export default Footer
