import React, { PureComponent, Fragment } from 'react'
import { appFooterLinks } from '@/common/local-data';
import { Wrapper } from './style';

export default class FooterLeft extends PureComponent {

  renderLink = () => {
    return (
      <p>
        {appFooterLinks.map(item => {
          return (
            <Fragment>
              <a href={item.link} target='_blank'>{item.title}</a>
              <span>|</span>
            </Fragment>
          )
        })}
      </p>
    );
  };

  renderCopyRight = () => {
    return (
      <p>
        <span>网易公司版权所有©1997-2020</span>
        <span>杭州乐读科技有限公司运营：</span>
        <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
      </p>
    )
  }

  renderContact = () => {
    return (
      <p>
        <span>违法和不良信息举报电话：0571-89853516</span>
        <span></span>
        <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
      </p>
    )
  }

  renderRecord = () => {
    return (
      <p>
        <span>粤B2-20090191-18</span>
        <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" target='_blank'>工业和信息化部备案管理系统网站</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target='_blank'>
          <span></span>
          <span>浙公网安备 33010902002564号</span>
        </a>
      </p>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderLink()}
        {this.renderCopyRight()}
        {this.renderContact()}
        {this.renderRecord()}
      </Wrapper>
    )
  }
}
