import { useState, useEffect } from 'react'
import { SessionType } from '~api/typings/studio/auth'
import { SingletonResponse } from '~api/typings'
import { post } from '~/api/middleware'

type SessionResponse = SingletonResponse<SessionType>

type SessionBody = {
  email: string
  password: string
  password_confirmation?: string
}

function useSession(name: string, path: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [body, setBody] = useState<SessionBody>()
  const [session, setSession] = useState<SessionType>()

  function beforeStart(): void {
    setLoading(true)
  }

  function onLoad(json: SessionResponse) {
    setSession(json.data)

    setLoading(false)
  }

  function authenticate(user: string, password: string) {
    setBody({ email: user, password })
  }

  useEffect(() => {
    if (body) post(beforeStart, onLoad, name, path, body)
  }, [body])

  return { setBody, session, loading }
}

export { useSession }