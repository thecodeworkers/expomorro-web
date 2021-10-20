import { setMenuShow } from '@store/actions'
import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Responsive: FC = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { page: { header, footer }, color: { secondary, menuText }, intermitence: { showMenu } } = useSelector((state: any) => state)

  const Navigation = orderBy(header?.navigation, 'position', 'asc')
  const Social = orderBy(footer?.social, 'position', 'asc')
  const Copyright = footer?.copyright

  return (header && footer) ? (
    <div className={[styles._headerResponsive, (showMenu) ? styles._enterAnimation : styles._leaveAnimation].join(' ')} style={{ backgroundColor: secondary }}>
      <div className={styles._topBorder}>
        <div className={styles._closeContainer}>
          <div className={styles._closeButtom} onClick={() => { dispatch(setMenuShow(false)) }}>
            <img src='/images/close.png' />
          </div>
        </div>
        <nav className={styles._navContainer}>
          <ul className={styles._listNav}>
            {Navigation?.map(
              (nav: any, key) => <li className={styles._listItem} style={{ color: menuText, borderColor: menuText }} key={key} onClick={() => router.push(nav?.page?.uri)}>{nav?.name}</li>
            )}
          </ul>
        </nav>
      </div>
      <div className={styles._bottomBorder}>
        <div className={styles._socialContainer}>
          {Social?.map(
            (network: any, key) => <div className={styles._socialItem} key={key}><a href={network?.url}><img className={styles._social} src={`${fallbackRestUrl}${network?.icon?.url}`} alt={network?.name} /></a></div>
          )}
        </div>
        <p style={{ color: menuText }} className={styles._copyright}>{Copyright}</p>
      </div>
    </div>
  ) : null
}

export default Responsive
