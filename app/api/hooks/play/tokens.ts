import { useState, useEffect } from 'react'
import { TokenType } from '~/api/studio/v1/typings/play'
import { get, SingletonResponse } from '~/api'

type TokenResponse = SingletonResponse<TokenType>

type TokenParams = {
  vodPlayId: string
}

function useToken(name: string, path: string, params: TokenParams) {
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<string>()

  const { vodPlayId } = params

  function beforeStart() {
    setLoading(true)
  }

  function onLoad(json: TokenResponse) {
    setToken(json.data.token)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, params)
  }, [vodPlayId])

  return { loading, token }
}

export { useToken }