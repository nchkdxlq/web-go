import React from 'react'

import NWDiscover from '@/pages/discover'
import NWMine from '@/pages/mine'
import NWFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom';


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='discover'/>
    )
  },
  {
    path: '/discover',
    component: NWDiscover
  },
  {
    path: '/mine',
    component: NWMine
  },
  {
    path: '/friend',
    component: NWFriend
  }
];


export default routes;