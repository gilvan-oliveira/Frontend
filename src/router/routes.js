
import ballance from 'src/router/ballance'
import produtct from 'src/router/produtct'
import role from 'src/router/role'
import salePoint from 'src/router/sale-point'
import settings from 'src/router/settings'
import user from 'src/router/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      ...ballance,
      ...produtct,
      ...role,
      ...salePoint,
      ...settings,
      ...user
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
