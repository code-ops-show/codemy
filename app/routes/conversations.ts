export default {
  name: 'conversations', 
  path: '/conversations', 
  children: [ 
    { name: 'show', path: '/:conversationId' }
  ]
}