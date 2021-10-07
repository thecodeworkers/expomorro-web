import { orderBy } from '@utils'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer'
import Header from '../Header'
import LayoutItem from './LayoutItem'

const Layout: FC = () => {
  const router = useRouter()
  const { page: { pages } } = useSelector((state: any) => state)
  const page = pages?.find((pag: any) => pag.URI === router.asPath)
  const content = orderBy(page?.Contenido, 'Posicion', 'asc')

  return (
    <div>
      <Header />
      {content ? content.map((data: any, index: any) => <LayoutItem data={data} key={index} />) : null}
      <Footer />
    </div>
  )
}

export default Layout
