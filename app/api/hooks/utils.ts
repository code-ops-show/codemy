import { ChangesetErrorType } from '../typings'

interface HasId {
  id?: string | number
}

type HasArray = HasId[]

export function isSuccessCollection<T extends HasArray>(
  response: T | ChangesetErrorType
): response is T {
  return (<T>response).length >= 0
}

export function isSuccess<T extends HasId>(
  response: T | ChangesetErrorType
): response is T {
  return (<T>response).id !== undefined
}

export function isError<T>(
  response: T | ChangesetErrorType
): response is ChangesetErrorType {
  return (<ChangesetErrorType>response).errors !== undefined
}
