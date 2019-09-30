export default [
  {
    name: 'sale-point',
    path: '/sale-points',
    meta: {
      add: 'sale-point-new'
    },
    component: () => import('src/pages/sale-point/SalePointList')
  },
  {
    name: 'sale-point-new',
    path: '/sale-points/new',
    component: () => import('src/pages/sale-point/SalePointForm')
  },
  {
    name: 'sale-point-edit',
    path: '/sale-points/:id',
    component: () => import('src/pages/sale-point/SalePointForm')
  }
]
