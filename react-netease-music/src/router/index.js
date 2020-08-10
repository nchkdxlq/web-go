import NWDiscover from '@/pages/discover'
import NWMine from '@/pages/mine'
import NWFriends from '@/pages/friends'


const routes = [
  {
    path: '/',
    exact: true,
    component: NWDiscover
  },
  {
    path: '/mine',
    component: NWMine
  },
  {
    path: '/friends',
    component: NWFriends
  }
];


export default routes;