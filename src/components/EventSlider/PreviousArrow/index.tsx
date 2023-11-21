import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import { fallbackRestUrl } from '@utils/path'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PreviousArrow = ({ reference, arrow }) => {
  return (
    <div className={styles._main} onClick={() => reference.current.slickPrev()}>
      <img src={`${fallbackRestUrl}${arrow?.url}`} />
    </div>
  )
}

export default PreviousArrow
