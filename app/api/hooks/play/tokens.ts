import * as React from 'react'
import { useState, useEffect } from 'react'
import { TokenType } from '~/api/studio/v1/typings/play'
import { get, SingletonResponse } from '~/api'

type TokenResponse = SingletonResponse<TokenType>

type TokenParams = {
  vod_play_id: string
}

function useToken(name: string, path: string, params: TokenParams) {
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<TokenType>()

  const { vod_play_id } = params

  function beforeStart() {
    setLoading(true)
  }

  function onLoad(json: TokenResponse) {
    setToken(json.data)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, params)
  }, [vod_play_id])

  return { loading, token }
}

export { useToken }