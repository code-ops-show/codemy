interface CollectionResponse<D, M> {
  data: D[]
  meta?: M
}

interface SingletonResponse<D> {
  data: D
}

type ChangeErrorType = {
  [key: string]: string | []
}

type ChangesetErrorType = {
  errors: ChangeErrorType
}

export { CollectionResponse, SingletonResponse, ChangesetErrorType }
