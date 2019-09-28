export default [
  {
    name: 'balance',
    path: '/balance',
    meta: {
      add: 'balance-new'
    },
    component: () => import('src/pages/balance/BalanceForm')
  },
  {
    name: 'balance-new',
    path: '/balance/new',
    component: () => import('src/pages/balance/BalanceList')
  },
  {
    name: 'balance-edit',
    path: '/balance/:id',
    component: () => import('src/pages/balance/BalanceList')
  }
]
