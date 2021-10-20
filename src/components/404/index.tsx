import React, { FC } from 'react'
import styles from './styles.module.scss'

const Error404: FC = () => {

  return (
    <div className={styles._mainError}>
      <h1>Pagina No Encontrada</h1>
      <h1>Error 404</h1>
    </div>
  )
}

export default Error404
