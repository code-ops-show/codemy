export default {
  name: 'posts',
  path: '/posts',
  children: [
    { name: 'page', path: '/page/:page' },
    { name: 'show', path: '/:postId' }
  ]
}
