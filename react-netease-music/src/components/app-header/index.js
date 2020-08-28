import React, { memo } from 'react';

import { NavLink} from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { appHeaderLinks } from '@/common/local-data'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function NWAppHeader() {

  const showHeaderLinks = () => {
    return (
      <div className="select-list">
        {appHeaderLinks.map((item) => {
          const isHttpLink = item.link.startsWith('http');
          return (
            <div key={item.title} className="select-item"> 
              {isHttpLink 
                ? <a href={item.link} target='_blank'>
                    {item.title}
                  </a>
                : <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                  </NavLink>
              }
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='/#' className='logo sprite_01'>网易云音乐</a>
          {showHeaderLinks()}
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder={'音乐/视频/电台/用户'} prefix={<SearchOutlined />}/>
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

