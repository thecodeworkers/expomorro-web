import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Props } from './interface'
import styles from './styles.module.scss'

const List: FC<Props> = ({ data }) => {

  const { color: { titles, body } } = useSelector((state: any) => state)
  const point = orderBy(data, 'position', 'asc')
  return (
    <div className={styles._main}>
      {point?.map((item, index) => {
        return (
          <div className={styles._pointContainer} key={index}>
            <div className={styles._iconContainer}>
              <img src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} />
            </div>
            <div className={styles._textContainer} style={(item.direction === 'vertical') ? {} : { display: 'flex' }}>
              <h3 className={styles._title} style={(item.direction === 'vertical') ? { color: titles } : { color: titles, width: '8rem' }}>{item?.title}</h3>
              <p className={styles._description} style={(item.direction === 'vertical') ? { color: body } : { width: 'calc(100% - 8rem)', color: body }}>{item?.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
