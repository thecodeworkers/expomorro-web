import React, { FC } from 'react'
import { Props } from './interface'
import styles from './styles.module.scss'
import { fallbackRestUrl } from '@utils/path'

const EventImagePreview: FC<Props> = ({ data }) => {

	const title = data?.title
	const isVisible = data?.visible
	const image = data?.image
	const imageResponsive = data?.responsive

	return (
		<>
			{
				isVisible && 
				<section className={styles._main}>
					<div className={styles._boxDescription}>{title}</div>
          <div className={styles._imageContainer}>
            <div className={[styles._imageMain, (imageResponsive?.url) ? styles._imageDesktop : ''].join(' ')} style={{backgroundImage: `url(${fallbackRestUrl}${image.url})` }}  />
            { 
              imageResponsive?.url && 
              <div className={[styles._imageMain, styles._imageMobile].join(' ')} style={{backgroundImage: `url(${fallbackRestUrl}${imageResponsive.url})`}} />
            }
        </div>
				</section>
			}
		</>
	)
}

export default EventImagePreview
