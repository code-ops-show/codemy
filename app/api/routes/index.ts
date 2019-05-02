import RouteNode from 'route-node'
import studio from './studio'

type EndpointType = {
  endpoint: any
  routes: RouteNode
}

type EndpointListType = {
  [key: string]: EndpointType
}

const endpoints: EndpointListType = {
  studio: { endpoint: process.env.STUDIO, routes: studio }
}

export default endpoints
