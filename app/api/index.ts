import studio from './studio'
import RouteNode from 'route-node'

type EndpointListType = {
  [key: string]: RouteNode
}

const endpoints: EndpointListType = { studio }

const api: Function = (
  name: string,
  path: string,
  params?: Object,
  options?: Object
): string => {
  const api = endpoints[name]

  return [
    process.env.ENDPOINT, 
    api.buildPath(path, params, options)
  ].join('')
}

export default api
