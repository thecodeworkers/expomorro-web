import React, { FC } from 'react'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { Layout } from '@components'

const Home: FC = () => {
  return  <Layout />
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store,getPage())
  }
)
