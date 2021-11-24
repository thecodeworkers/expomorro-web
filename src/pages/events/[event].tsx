import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import wrapper from '@store'
import { mapProps } from '@utils'
import { setPortfolio } from '@store/actions'
import { getPage } from '@store/actions'
import { Layout } from '@components'

const Event: FC = () => {

  // const { portfolio: { portfolios } } = useSelector((state: any) => state)
  // const { color: { secondary, primary } } = useSelector((state: any) => state)
  // console.log("yay", portfolios)
  // console.log("ahaha", secondary);
  
  return  <Layout />
}

export default Event

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store,getPage())
  }
)
