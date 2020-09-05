import React from 'react'
import { Redirect } from 'react-router-dom';

import NWDiscover from '@/pages/discover';

import Recommend from '@/pages/discover/c-pages/recommend'
import Ranking from '@/pages/discover/c-pages/ranking'
import Songs from '@/pages/discover/c-pages/songs'
import Radio from '@/pages/discover/c-pages/radio'
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist'

import NWMine from '@/pages/mine'
import NWFriend from '@/pages/friend'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover'/>
    )
  },
  {
    path: '/discover',
    component: NWDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend'/>
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/radio',
        exact: true,
        component: Radio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      },
    ]
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