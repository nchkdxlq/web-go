import React, { PureComponent, Fragment } from 'react';


import {
  Wrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default class RCMThemeHeader extends PureComponent {

  renderKeyword = (keywords) => {
    return (
      <div className='keyword'>
        {
          keywords.map((item, index) => {
            return (
              <Fragment>
                <a href={item.url}>{item.title}</a>
                <span className='divider'>|</span>
              </Fragment>
            )
          })
        }
      </div>
    )
  }

  render() {
    const { title, keywords = [] } = this.props;

    return (
      <Wrapper>
        <div className='left'>
          <h3 className='title'>{title}</h3>
          {this.renderKeyword(keywords)}
        </div>
        <div className='right'>
          <a href='todo'>更多</a>
          <i className='icon sprite_02'/>
        </div>
      </Wrapper>
    )
  }
}
