import RouteNode from 'route-node'
import posts from './posts'
import statistics from './statistics'
import sets from './sets'

const v1 = new RouteNode('v1', '/v1', [
  posts,
  sets,
  statistics
])

export default v1