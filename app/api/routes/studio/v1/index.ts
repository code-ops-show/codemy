import RouteNode from 'route-node'
import posts from './posts'
import statistics from './statistics'
import sets from './sets'
import play from './play'

const v1 = new RouteNode('v1', '/v1', [
  posts,
  sets,
  statistics,
  play
])

export default v1