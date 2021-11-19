import { orderBy } from '@utils'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import List from '../List'
import { formLayout } from './formLayout'
import { Props } from './interface'
import styles from './styles.module.scss'

const FormWithList: FC<Props> = ({ data }) => {

  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  const { color: { titles, secondary, complement } } = useSelector((state: any) => state)

  const form = orderBy(data?.form?.Datos, 'position', 'asc')
  const points = data?.points

  const putHeight = () => {
    setHeight(contentRef.current ? contentRef.current.clientHeight : 0)
  }

  useEffect(() => {
    putHeight()
  }, [contentRef])

  return (
    <div className={styles._main}>
      <div className={styles._boxContainer}>
        <div className={styles._contentContainer}>
          <div className={styles._formContentContainer}>
            <div className={styles._lineLateral} style={{ backgroundColor: secondary }}></div>
            <div className={styles._textFormContainer}>
              <div ref={contentRef} className={styles._textContainer}>
                <h1 className={styles._title} style={{ color: complement }}>{data?.title}</h1>
                <p className={styles._subtitle} style={{ color: titles }}>{data?.subtitle}</p>
              </div>
              <div className={styles._formContainer}>
                {form?.map((item, index) => {
                  const Render = formLayout[item?.__typename]
                  return Render ? <Render data={item} key={index} /> : null
                })}
              </div>
              <div className={styles._textContainer}>
                <p className={styles._subtitleDown}>{data?.footerText}</p>
              </div>
            </div>
          </div>
          <div className={styles._pointsContainer} style={{ paddingTop: height }}>
            <List data={points} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormWithList
