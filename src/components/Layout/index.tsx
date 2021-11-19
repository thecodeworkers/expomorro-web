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
import Head from 'next/head'

const Layout: FC = () => {

  const router = useRouter()
  const { page: { pages }, font: { bold, normal, slim, roman }, color: { primary }, intermitence: { showLoader } } = useSelector((state: any) => state)

  const page = pages?.find((pag: any) => pag.uri === router?.asPath)

  const content = orderBy(page?.content, 'position', 'asc')

  return (
    <>
      <Head>
        <title>Expomorro - {page?.name || '404'}</title>
      </Head>
      <div>
        {content?.length ? content.map((data: any, index: any) => <LayoutItem data={data} key={index} />) : <Error404 />}
        <Footer />
        <style jsx>{`
        div{
          background-color: ${primary}
        }
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
        @font-face {
          font-family: 'RomanFont';
          src: url('${fallbackRestUrl}${roman?.url}');
        }
        `}
        </style>
      </div>
      {showLoader && <Loader />}
    </>
  )
}

export default Layout
