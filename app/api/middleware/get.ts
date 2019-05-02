import api from '../index'

export default async function (
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