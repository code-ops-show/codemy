import { useState, useEffect } from 'react'
import { SessionType } from '~/api/studio/v1/typings/auth'
import { post, SingletonResponse } from '~/api'

type SessionResponse = SingletonResponse<SessionType>

function useSession(name: string, path: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [body, setBody] = useState<Object>({})
  const [session, setSession] = useState<SessionType>()

  function beforeStart(): void {
    setLoading(true)
  }

  function onLoad(json: SessionResponse) {
    setSession(json.data)

    setLoading(false)
  }

  useEffect(() => {
    post(beforeStart, onLoad, name, path, body)
  }, [body])

  return { setBody, session, loading }
}

export { useSession }