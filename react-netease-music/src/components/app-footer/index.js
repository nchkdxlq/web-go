import React, { memo, Fragment } from 'react'

import { appFooterLinks, footerImages } from '@/common/local-data'

import {
  Wrapper,
  FooterLeft,
  FooterRight
} from './style'


export default memo(function NWAppFooter() {

  const renderLink = () => {
    return (
      <p>
        {appFooterLinks.map(item => {
          return (
            <Fragment>
              <a className='link-item' href={item.link} target='_blank'>{item.title}</a>
              <span className='line'>|</span>
            </Fragment>
          )
        })}
      </p>
    );
  };

  const renderCopyRight = () => {
    return (
      <p>
        <span className='blank-space'>网易公司版权所有©1997-2020</span>
        <span className='blank-space'>杭州乐读科技有限公司运营：</span>
        <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
      </p>
    )
  }

  const renderContact = () => {
    return (
      <p>
        <span className='blank-space'>违法和不良信息举报电话：0571-89853516</span>
        <span>举报邮箱：</span>
        <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
      </p>
    )
  }

  const renderRecord = () => {
    return (
      <p>
        <span className='blank-space'>粤B2-20090191-18</span>
        <a className='blank-space' href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" target='_blank'>工业和信息化部备案管理系统网站</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target='_blank'>
          <span></span>
          <span>浙公网安备 33010902002564号</span>
        </a>
      </p>
    )
  }

  const renderRightImages = () => {
    return footerImages.map(item => {
      return (
        <li className='item' key={item.link}>
          <a className='link' href={item.link} target='_blank'></a>
          <span className='title'>{item.title}</span>
        </li>
      )
    });
  }

  return (
    <Wrapper className='wrap-v2 content'>
      <FooterLeft>
        {renderLink()}
        {renderCopyRight()}
        {renderContact()}
        {renderRecord()}
      </FooterLeft>
      <FooterRight>
        {renderRightImages()}
      </FooterRight>
    </Wrapper>
  )
})