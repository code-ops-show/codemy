import studio from './studio'
import RouteNode from 'route-node'

type EndpointType = {
  endpoint: any
  routes: RouteNode
}

type EndpointListType = {
  [key: string]: EndpointType
}

interface CollectionResponse<D, M> {
  data: D[],
  meta?: M
}

interface SingletonResponse<D> {
  data: D
}

const endpoints: EndpointListType = {
  studio: { endpoint: process.env.STUDIO, routes: studio }
}

function api(
  name: string,
  path: string,
  params?: Object,
  options?: Object
): string {
  const { endpoint, routes } = endpoints[name]

  return [endpoint, routes.buildPath(path, params, options)].join('')
}

async function post(
  beforeStart: Function,
  afterFinish: Function,
  name: string,
  path: string,
  body: Object,
  params?: Object
): Promise<any> {
  beforeStart()

  const response = await fetch(api(name, path, params), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const json = await response.json()

  afterFinish(json)
}

async function get(
  beforeStart: Function,
  afterFinish: Function,
  name: string,
  path: string,
  params?: Object
): Promise<any> {
  beforeStart()

  const response = await fetch(api(name, path, params))
  const json = await response.json()

  afterFinish(json)
}

export { api, get, post, CollectionResponse, SingletonResponse }
