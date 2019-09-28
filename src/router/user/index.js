export default [
  {
    name: 'user',
    path: '/users',
    meta: {
      add: 'user-new'
    },
    component: () => import('src/pages/user/UserList')
  },
  {
    name: 'user-new',
    path: '/users/new',
    component: () => import('src/pages/user/UserForm')
  },
  {
    name: 'user-edit',
    path: '/users/:id',
    component: () => import('src/pages/user/UserForm')
  }
]
