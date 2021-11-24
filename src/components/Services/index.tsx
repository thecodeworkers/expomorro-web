import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const Services: FC<Props> = ({ data }) => {

  const { color: { titles } } = useSelector((state: any) => state)

  const services = orderBy(data?.service, 'where', 'asc') || []
  
  return (
    <div className={styles._main}>
      {services.map((service: any, index: any) => (
        <div className={styles._serviceBox} key={index}>
          <img className={styles._serviceIcon} src={`${fallbackRestUrl}${service?.service?.icon?.url}`} alt={service?.icon?.name} />
          <h3 style={{ color: titles }} className={styles._serviceTitle}>{service?.service?.title}</h3>
          <p style={{ color: titles }} className={styles._serviceDescription}>{service?.service?.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Services
