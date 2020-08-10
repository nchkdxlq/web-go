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


export default class App extends PureComponent {
  render() {
    return (
      <RedirectExample />
    )
  }
}
