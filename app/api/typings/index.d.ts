interface CollectionResponse<D, M> {
  data: D[],
  meta?: M
}

interface SingletonResponse<D> {
  data: D
}

export { CollectionResponse, SingletonResponse }
