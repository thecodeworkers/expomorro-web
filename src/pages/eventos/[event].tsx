import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import wrapper from '@store'
import { mapProps } from '@utils'
import { setPortfolio } from '@store/actions'
import { getPage } from '@store/actions'
import { Layout } from '@components'

const Event: FC = () => {
  
  const { portfolio: { portfolios } } = useSelector((state: any) => state)

  useEffect(() => {
    const path = window.location.pathname
    console.log("yay", portfolios.find(element => element['uri'] == '/'+path.split("/")[2]))
    console.log("ahaha", path.split("/")[2]);
  }, [])

  
  return  <Layout />
}

export default Event

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store,getPage())
  }
)
