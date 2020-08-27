import NWDiscover from '@/pages/discover'
import NWMine from '@/pages/mine'
import NWFriend from '@/pages/friend'


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
    path: '/friend',
    component: NWFriend
  }
];


export default routes;