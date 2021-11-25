import { useEffect } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from '@store/actions'

const Toast = () => {

  const dispatch = useDispatch()
  const { toast } = useSelector((state: any) => state)

  let timeout

  const currentClass = (status: number = 0) => {
    if (status === 0) return styles._toast
    if (status === 1) {
      timeout = setTimeout(() => {
        dispatch(setToast(toast?.type, toast?.text, 2))
      }, 2000)

      return styles._toastIn
    }
    if (status === 2) return styles._toastOut
  }

  useEffect(() => {
    return () => { clearTimeout(timeout) }
  }, [])

  const returnIcon = (icon) => {

    const values = {
      check: 'images/icons/check.svg',
      error: 'images/icons/error.svg',
      warning: 'images/icons/warning.svg'
    }

    return values[icon] || 'images/icons/check.svg'
  }

  return (
    <div className={currentClass(toast?.status)}>
      <div className={styles._content}>
        {toast?.type && <img src={returnIcon(toast?.type)} width='20px' height='20px' alt='check'></img>}
        <p>{toast?.text}</p>
      </div>
    </div>
  )
}

export default Toast
