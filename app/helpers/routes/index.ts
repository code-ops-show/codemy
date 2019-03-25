import { State } from 'router5'
import { startsWithSegment } from 'router5-helpers'

const isAuth: Function = (route: State) => startsWithSegment(route.name, 'auth') as boolean

const layoutName: Function = (route: State): string => {
  const [layout] = route.name.split('.')
  return layout
}

export { isAuth }