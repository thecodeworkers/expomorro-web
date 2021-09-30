import { orderBy } from '@utils'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import LayoutItem from './LayoutItem'

const Layout: FC = () => {
  const router = useRouter()
  const { page: { pages } } = useSelector((state: any) => state)
  const page = pages?.find((pag: any) => pag.URI === router.pathname)
  const content = orderBy(page?.Contenido, 'Posicion', 'asc')

  return (
    <div>
      {content ? content.map((data: any, index: any) => <LayoutItem data={data} />) : null}
    </div>
  )
}

export default Layout
