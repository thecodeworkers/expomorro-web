import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import List from '../List'
import { formLayout } from './formLayout'
import { Props } from './interface'
import { sendEmail } from '@store/actions'
import { orderBy } from '@utils'
import styles from './styles.module.scss'

const FormWithList: FC<Props> = ({ data }) => {

  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [formData, setFormData] = useState({ data: [], actualSelected: '' })
  const [validData, setValidData] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { color: { titles, secondary, complement } } = useSelector((state: any) => state)

  const form = orderBy(data?.form?.Datos, 'position', 'asc')
  const points = data?.points

  const putHeight = () => {
    setHeight(contentRef.current ? contentRef.current.clientHeight : 0)
  }

  useEffect(() => {
    putHeight()
  }, [contentRef])

  const InputData = (data) => {
    const name = data?.target?.name
    const value = data?.target?.value

    const newFormData = formData?.data

    const exist = newFormData.findIndex((dat: any) => dat?.name === name)

    if (exist >= 0) newFormData.splice(exist, 1, { name, value })
    if (exist < 0) newFormData.push({ name, value })

    setFormData({ data: newFormData, actualSelected: name })
  }

  const checkValidData = () => {
    setValidData(form.reduce((prev: any, next: any) => {
      const val = formData?.data?.findIndex((dat: any) => dat?.name === next?.name)
      if (val < 0) return true
      if (val >= 0) return false
    }, false))
  }

  useEffect(() => {
    checkValidData()
  }, [formData])

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
                  return Render ? <Render data={item} key={index} onChange={InputData} /> : null
                })}
              </div>
              <div className={styles._textContainer}>
                <div className={styles._buttonContainer}>
                  <Button data={{ text: 'Enviar' }} disabled={validData} onClick={() => dispatch(sendEmail({ name: data?.form?.name, data: formData?.data }))} />
                </div>
                <p className={styles._subtitleDown}>{data?.footerText}</p>
              </div>
            </div>
          </div>
          <div className={styles._pointsContainer} style={{ paddingTop: height }}>
            <List data={points} align={true} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormWithList
