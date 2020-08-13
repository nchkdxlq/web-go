import React, { PureComponent } from 'react';
import {
  HashRouter,
  BrowserRouter,
  Link,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

import NestingExample from './nesting';
import RedirectExample from './redirect';
import RouterConfigExample from './router-config';
import URLParamsExample from './url-parameters';
import QueryParameterExample from './query-parameters';


export default class App extends PureComponent {
  render() {
    return (
      <QueryParameterExample />
    )
  }
}

/*

BrowserRouter
主要使用在浏览器中, 利用HTML5的history API来同步URL和UI的变化.
当我们点击程序中的一个链接后, BrowserRouter就会找出与这个URL匹配的Route, 并将它们对应的组件渲染出来。
BrowserRouter是用来管理应用程序组件的, 需要放在最顶级的位置, 应用程序的组件作为它的子组件。

1. 同步URL和UI的变化
2. 找出与URL匹配的Route, 并渲染对应的组件
3. 管理组件, 需要放在应用程序的最顶部

*/