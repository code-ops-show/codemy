export default {
  name: 'posts',
  path: '/posts',
  forwardTo: 'posts.page',
  defaultParams: { page: '1' },
  children: [
    { name: 'page', path: '/page/:page' },
    {
      name: 'show', path: '/:postId', children: [
        { name: 'sets', path: '/sets/:setId' },
        { name: 'collections', path: '/collections/:collectionId' }
      ]
    }
  ]
}
