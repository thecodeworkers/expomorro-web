
import React, { FC } from 'react'
import { Props } from './interface'
import { layout } from './layout'

const LayoutItem: FC<Props> = ({ data }) => {
  const Render = layout[data?.__typename]
  return (
    <div>
      {Render ? <Render data={data} /> : null}
    </div>
  )
}

export default LayoutItem
