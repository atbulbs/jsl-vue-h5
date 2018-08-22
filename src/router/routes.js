const Home = () => import('pages/home')
const List = () => import('pages/list')
const AvatarDemo = () => import('pages/avatar-demo')
const ButtonDemo = () => import('pages/button-demo')
const CloseDemo = () => import('pages/close-demo')
const LoadingDemo = () => import('pages/loading-demo')
const NavbarDemo = () => import('pages/navbar-demo')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List,
    meta: {
      title: 'demo 列表'
    }
  },
  {
    path: '/avatar-demo',
    name: 'avatar-demo',
    component: AvatarDemo,
    meta: {
      title: 'avatar 组件'
    }
  },
  {
    path: '/button-demo',
    name: 'button-demo',
    component: ButtonDemo,
    meta: {
      title: 'button 组件'
    }
  },
  {
    path: '/close-demo',
    name: 'close-demo',
    component: CloseDemo,
    meta: {
      title: 'close 组件'
    }
  },
  {
    path: '/loading-demo',
    name: 'loading-demo',
    component: LoadingDemo,
    meta: {
      title: 'loading 组件'
    }
  },
  {
    path: '/navbar-demo',
    name: 'navbar-demo',
    component: NavbarDemo,
    meta: {
      title: 'navbar 组件'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
