const Home = () => import('pages/home')
const List = () => import('pages/list')
const AvatarDemo = () => import('pages/avatar-demo')
const ButtonDemo = () => import('pages/button-demo')
const CloseDemo = () => import('pages/close-demo')
const LoadingDemo = () => import('pages/loading-demo')
const NavbarDemo = () => import('pages/navbar-demo')
const NomoreTipDemo = () => import('pages/nomore-tip-demo')
const GridDemo = () => import('pages/grid-demo')
const BtnScalableJumpDemo = () => import('pages/btn-scalable-jump-demo')
const ToastDemo = () => import('pages/toast-demo')

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
    path: '/btn-scalable-jump-demo',
    name: 'btn-scalable-jump-demo',
    component: BtnScalableJumpDemo,
    meta: {
      title: 'btn-scalable-jump demo'
    }
  },
  {
    path: '/toast-demo',
    name: 'toast-demo',
    component: ToastDemo,
    meta: {
      title: 'toast demo'
    }
  },
  {
    path: '/grid-demo',
    name: 'grid-demo',
    component: GridDemo,
    meta: {
      title: 'grid demo'
    }
  },
  {
    path: '/avatar-demo',
    name: 'avatar-demo',
    component: AvatarDemo,
    meta: {
      title: 'avatar demo'
    }
  },
  {
    path: '/button-demo',
    name: 'button-demo',
    component: ButtonDemo,
    meta: {
      title: 'button demo'
    }
  },
  {
    path: '/close-demo',
    name: 'close-demo',
    component: CloseDemo,
    meta: {
      title: 'close demo'
    }
  },
  {
    path: '/loading-demo',
    name: 'loading-demo',
    component: LoadingDemo,
    meta: {
      title: 'loading demo'
    }
  },
  {
    path: '/navbar-demo',
    name: 'navbar-demo',
    component: NavbarDemo,
    meta: {
      title: 'navbar demo'
    }
  },
  {
    path: '/nomore-tip-demo',
    name: 'nomore-tip-demo',
    component: NomoreTipDemo,
    meta: {
      title: 'nomore-tip demo'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
