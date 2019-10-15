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
    meta: {
      title: 'Novo produto'
    },
    component: () => import('src/pages/product/ProdutcForm')
  },
  {
    name: 'product-edit',
    path: '/products/:id',
    meta: {
      title: 'Editar produto'
    },
    component: () => import('src/pages/product/ProdutcForm')
  }
]
