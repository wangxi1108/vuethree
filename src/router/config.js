const config = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/views/home'),
  //   meta: {
  //     title: '会员首页',
  //     permission: ''
  //   }
  // },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/layout/index'),
    children: [
      {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {
        title: '会员首页',
        permission: ''
      }
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test'),
        meta: {
          title: 'test',
          permission: ''
        }
      }
    ]
  }
]
export default config