export default {
  name: 'posts',
  path: '/posts',
  children: [
    { name: 'show', path: '/:postId' },
    {
      name: 'search',
      path: '/search',
      children: [
        { name: 'sets', path: '/sets/:setId', children: [
          { name: 'order', path: '/order/:order' }
        ] },
        { name: 'page', path: '/page/:page' }
      ]
    }
  ]
}
