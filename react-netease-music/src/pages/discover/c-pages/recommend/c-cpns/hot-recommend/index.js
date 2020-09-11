import React, { PureComponent } from 'react'

import RCMThemeHeader from '@/components/rcm-theme-header';

import {
  Wrapper
} from './style';


const KEYWORDS = [
  {
    title: '华语',
    url: ''
  },
  {
    title: '流行',
    url: ''
  },
  {
    title: '摇滚',
    url: ''
  },
  {
    title: '民谣',
    url: ''
  },
  {
    title: '电子',
    url: ''
  },
];


export default class HotRecommend extends PureComponent {
  render() {
    return (
      <Wrapper>
        <RCMThemeHeader title='热门推荐' keywords={KEYWORDS}/>
      </Wrapper>
    )
  }
}