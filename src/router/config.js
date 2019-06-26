const config = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: 'index',
    name: 'index',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: 'main',
    // redirect: '/home',
    component: () => import('@/views/layout/components/Main.vue'),
    meta: {
      title: '系统中心',
      hidden: true,
      permission: ''
    }
    // children: [{
    //   path: 'home',
    //   name: 'home',
    //   component: () => import('@/views/home/index'),
    //   meta: {
    //     title: '会员首页',
    //     permission: ''
    //   }
    // }]
  }
]
export default config