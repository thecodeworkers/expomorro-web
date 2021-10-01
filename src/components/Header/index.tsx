import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Header: FC = () => {

  const { page: { header } } = useSelector((state: any) => state)

  const Logo = header?.Logo
  const Navigation = orderBy(header?.Navigation, 'Posicion', 'asc')
  const Social = orderBy(header?.Social, 'Posicion', 'asc')

  return header ? (
    <header className={styles._header}>
      <div className={styles._logoContainer}>
        <img src={`${fallbackRestUrl}${Logo?.url}`} alt="Logo Principal" />
      </div>
      <nav>
        <ul className={styles._listNav}>
          {Navigation?.map(
            (nav: any, key) => <li key={key}>{nav.Name}</li>
          )}
        </ul>
      </nav>
      <div className={styles._socialContainer}>
        {Social?.map(
          (network: any, key) => <div className={styles._socialItem} key={key}><img src={`${fallbackRestUrl}${network.Icon?.url}`} alt={network.Name} /></div>
        )}
      </div>
    </header>
  ) : null
}

export default Header
