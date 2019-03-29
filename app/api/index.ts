import studio from './studio'
import RouteNode from 'route-node'

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

const api: Function = (
  name: string,
  path: string,
  params?: Object,
  options?: Object
): string => {
  const { endpoint, routes } = endpoints[name]

  return [endpoint, routes.buildPath(path, params, options)].join('')
}

export default api
