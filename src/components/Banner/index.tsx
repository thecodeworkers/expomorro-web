import { fallbackRestUrl } from '@utils/path'
import React, { FC } from 'react'
import ModLottie from '../ModLottie'
import { Props } from './interface'

const Banner: FC<Props> = ({ data }) => {
  const image = data?.image
  const imageResponsive = data?.imageResponsive
  const fullWidth = data?.fullWidth
  const type = data?.type

  return (
    <div className='_main' style={(fullWidth) ? {} : { padding: '0 3%' }}>
      <>
        {(type !== 'lottie' && type !== 'video') && (
          <>
            <img className={`_bannerMain ${(imageResponsive?.url) ? '_bannerDesktop' : ''}`} src={`${fallbackRestUrl}${image?.url}`} />
            {imageResponsive?.url && <img className='_bannerMain _bannerMobile' src={`${fallbackRestUrl}${imageResponsive?.url}`} />}
          </>
        )}
        {(type === 'lottie') && (
          <>
            <ModLottie options={{ loop: true, autoPlay: true }} className={`_bannerMain ${(imageResponsive?.url) ? '_bannerDesktop' : ''}`} data={`${fallbackRestUrl}${image?.url}`} />
            {imageResponsive?.url && <ModLottie className='_bannerMain _bannerMobile' data={`${fallbackRestUrl}${imageResponsive?.url}`} />}
          </>
        )}
        {(type === 'video') && (
          <>
            <video className={`_bannerMain ${(imageResponsive?.url) ? '_bannerDesktop' : ''}`} src={`${fallbackRestUrl}${image?.url}`} />
            {imageResponsive?.url && <video className='_bannerMain _bannerMobile' src={`${fallbackRestUrl}${imageResponsive?.url}`} />}
          </>
        )}
      </>
      <style jsx>
        {`
        ._main {
          display: flex;
          width: 100%;
          align-content: center;
          justify-content: space-between;
          box-sizing: border-box;
        }
        
        ._bannerMain {
          width: 100%;
          height: auto;
        }
        
        ._bannerDesktop {
          display: block;
        }
        
        ._bannerMobile {
          display: none;
        }
        

        @media (max-width: 768px) {
          ._bannerDesktop {
            display: none;
          }
          
          ._bannerMobile {
            display: block;
          }
        }
        `}
      </style>
    </div>
  )
}

export default Banner
