import React, { FC, useEffect, useState } from 'react'
import Lottie from 'react-lottie'

const ModLottie: FC<any> = ({ data, options = { autoplay: true, loop: true }, className }) => {

  const [animation, setAnimation] = useState(null)

  const impo = async () => {
    const result = await fetch(data)
    const json = await result?.json()
    setAnimation(json)
  }

  useEffect(() => {
    impo()
  }, [data])

  options.animationData = animation

  return animation ? (
    <div className={className}>
      <Lottie options={options} />
      <style jsx>
        {`
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
  ) : null
}

export default ModLottie
