import React, { PureComponent } from 'react';
import {
  HashRouter,
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/profile'>我的</Link>

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/profile' component={Profile}/>
        </BrowserRouter>
      </div>
    )
  }
}
