import * as React from 'react'
import { FunctionComponent, useRef, useEffect } from 'react'
import { useRoute } from 'react-router5'
import { useMedia } from '~/api/hooks'

import api from '~/api'

type MediaProps = {
  title: string
  coverPicture: string | undefined
}

const Media: FunctionComponent<MediaProps> = props => {
  const { title, coverPicture } = props
  const { route } = useRoute()
  const playerRef = useRef<HTMLDivElement>(null)

  const { media, loading } = useMedia(
    'studio', 
    'v1.posts.show.media', 
    { postId: route.params.postId }
  )
  
  useEffect(() => {
    if (media[0]) {

      const [medium] = media
      const { vod_play_id } = medium

      async function setupPlayer() {
        const playTokenUrl: string = api('studio', 'v1.play.tokens', { vodPlayId: vod_play_id })
        const response = await fetch(playTokenUrl)
        const json = await response.json()
        const status = await response.status
        
        if (status === 200 && playerRef.current) {
          jwplayer(playerRef.current).setup({
            file: `https://www.codemy.net/hls/${vod_play_id}/master.m3u8?play_token=${json.data.token}`,
            title: title,
            playbackRateControls: true,
            image: coverPicture
          })
        }
      }

      setupPlayer()
    }
  }, [loading, playerRef])

  return <div className='absolute pin'>
    <div ref={playerRef} />
  </div>
}

export default Media