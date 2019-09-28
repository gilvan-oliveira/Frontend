export default [
  {
    name: 'product',
    path: '/products',
    meta: {
      add: 'product-new'
    },
    component: () => import('src/pages/product/ProdutcList')
  },
  {
    name: 'product-new',
    path: '/products/new',
    component: () => import('src/pages/product/ProdutcForm')
  },
  {
    name: 'product-edit',
    path: '/products/:id',
    component: () => import('src/pages/product/ProdutcForm')
  }
]
