import api from '../index'

export default async function (
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