export default {
  name: 'posts',
  path: '/posts',
  children: [
    {
      name: 'search',
      path: '/search',
      children: [{ name: 'page', path: '/page/:page' }]
    }
  ]
}
