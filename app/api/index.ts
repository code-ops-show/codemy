import endpoints from './routes'

function api(
  name: string,
  path: string,
  params?: Object,
  options?: Object
): string {
  const { endpoint, routes } = endpoints[name]

  return [endpoint, routes.buildPath(path, params, options)].join('')
}

export default api