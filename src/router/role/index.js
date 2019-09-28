export default [
  {
    name: 'role',
    path: '/roles',
    meta: {
      add: 'role-new'
    },
    component: () => import('src/pages/role/RoleList')
  },
  {
    name: 'role-new',
    path: '/roles/new',
    component: () => import('src/pages/role/RoleForm')
  },
  {
    name: 'role-edit',
    path: '/roles/:id',
    component: () => import('src/pages/role/RoleForm')
  }
]
