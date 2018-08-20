const Home = () => import('pages/home')
const List = () => import('pages/list')
const LoadingDemo = () => import('pages/loading-demo')

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
      title: '列表'
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
    path: '*',
    redirect: '/'
  }
]
