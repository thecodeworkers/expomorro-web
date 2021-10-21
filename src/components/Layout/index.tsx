import { orderBy } from '@utils'
import { fallbackRestUrl } from '@utils/path'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Error404 from '../404'
import Footer from '../Footer'
import Header from '../Header'
import Loader from '../Loader'
import LayoutItem from './LayoutItem'

const Layout: FC = () => {

  const router = useRouter()
  const { page: { pages }, font: { bold, normal, slim }, intermitence: { showLoader } } = useSelector((state: any) => state)

  const page = pages?.find((pag: any) => pag.uri === router.asPath)

  const content = orderBy(page?.content, 'position', 'asc')

  return (
    <>
      <div>
        <Header />
        {content?.length ? content.map((data: any, index: any) => <LayoutItem data={data} key={index} />) : <Error404 />}
        <Footer />
        <style jsx>{`
        @font-face {
          font-family: 'BoldFont';
          src: url('${fallbackRestUrl}${bold?.url}');
        }

        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${normal?.url}');
        }
        @font-face {
          font-family: 'SlimFont';
          src: url('${fallbackRestUrl}${slim?.url}');
        }
    `}
        </style>
      </div>
      {showLoader && <Loader />}
    </>
  )
}

export default Layout
