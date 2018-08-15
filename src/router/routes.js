const Home = () => import('pages/home')
const List = () => import('pages/list')
const Item = () => import('pages/item')
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
    path: '/loading-demo',
    name: 'loading-demo',
    component: LoadingDemo
  },
  {
    path: '/list/:id',
    name: 'list',
    component: List,
    meta: {
      metaData: 'it is metaData from list route',
      scrollToBottom: true
    },
    children: [
      {
        path: '',
        component: Item
      },
      {
        path: 'item',
        component: Item
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
