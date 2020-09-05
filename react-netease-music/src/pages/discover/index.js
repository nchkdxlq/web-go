import React, { memo } from 'react'
import { NavLink} from 'react-router-dom'

import {
  dicoverMenu
} from '@/common/local-data'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

export default memo(function NWDiscover() {
  return (
    <DiscoverWrapper>
      <div className='wrap-v1'>
        <TopMenu >
          {
            dicoverMenu.map(item => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </DiscoverWrapper>
  )
})
