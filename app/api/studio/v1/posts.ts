export default {
  name: 'posts',
  path: '/posts',
  children: [
    { name: 'show', path: '/:postId', children: [
      { name: 'media', path: '/media' }
    ] },
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
