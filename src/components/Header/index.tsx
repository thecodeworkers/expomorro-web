import { setLoaderShow, setMenuShow } from '@store/actions'
import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Responsive from './Responsive'
import styles from './styles.module.scss'

const Header: FC = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { page: { header }, intermitence: { showMenu }, color: { primary } } = useSelector((state: any) => state)

  const Logo = header?.logo
  const Navigation = orderBy(header?.navigation, 'position', 'asc')
  const Social = orderBy(header?.social, 'position', 'asc')
  return header ? (
    <header className={styles._header} style={{ backgroundColor: primary }}>
      <div className={styles._logoContainer}>
        <img src={`${fallbackRestUrl}${Logo?.url}`} alt='Logo Principal' />
      </div>
      <nav className={styles._navContainer}>
        <ul className={styles._listNav}>
          {Navigation?.map(
            (nav: any, key) => <li key={key} onClick={() => { router.push(nav.page.uri); dispatch(setLoaderShow(true)) }}>{nav.name}</li>
          )}
        </ul>
      </nav>
      <div className={styles._socialContainer}>
        {Social?.map(
          (network: any, key) => <div className={styles._socialItem} key={key}><a href={network.url}><img className={styles._social} src={`${fallbackRestUrl}${network.icon?.url}`} alt={network.name} /></a></div>
        )}
      </div>
      <div className={styles._navMobile}>
        <div className={styles._mobileIcon} onClick={() => { dispatch(setMenuShow(true)) }}>
          <img src='/images/burger.png' />
        </div>
        {showMenu && <Responsive />}
      </div>
    </header>
  ) : null
}

export default Header
