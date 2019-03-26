export default {
  name: 'auth',
  path: '/auth',
  children: [
    { name: 'login', path: '/login' },
    { name: 'register', path: '/register' }
  ]
}