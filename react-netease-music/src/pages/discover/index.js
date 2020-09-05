import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Recommend } from '@/pages/discover/c-pages/recommend'

import {
  dicoverMenu
} from '@/common/local-data'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

export default memo(function NWDiscover(props) {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
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
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
