export default {
  name: 'posts',
  path: '/posts',
  children: [
    { name: 'show', path: '/:postId' },
    {
      name: 'search',
      path: '/search',
      children: [{ name: 'page', path: '/page/:page' }]
    }
  ]
}
