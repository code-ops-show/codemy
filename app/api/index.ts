import studio from './studio'
import RouteNode from 'route-node'

type EndpointListType = {
  [key: string]: {
    endpoint: any,
    routes: RouteNode 
  }
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

  const api = endpoints[name]
  const { endpoint, routes } = api

  return [
    endpoint, 
    routes.buildPath(path, params, options)
  ].join('')
}

export default api
