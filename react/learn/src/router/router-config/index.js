import React, { memo } from 'react';

import {
  BrowserRouter,
  Link,
} from 'react-router-dom';

import { renderRoutes } from 'react-router-config';


const routes = [
  {
    path:'/',
    component: Home,
    exact: true
  },
  {
    path:'/child',
    component: Child,
    routes: [
      {
        path: '/child/grand-child',
        component: GrandChild
      }
    ]
  }
];



export default memo(function RouterConfigExample() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/child'>Child</Link>
      <hr/>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
})



function Home(props) {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


function Child(props) {
  const { route } = props;
  return (
    <div>
      <h2>Child</h2>
      <Link to='/child/grand-child'>GrandChild</Link>
      {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
  );
}

function GrandChild(props) {
  const { someProp } = props;
  return (
    <div>
      <h3>Grand Child</h3>
      <div>{someProp}</div>
    </div>
  );
}