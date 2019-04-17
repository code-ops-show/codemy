import * as React from 'react'
import { FunctionComponent } from 'react'
import { useRoute } from 'react-router5'
import { useMedia } from '~/api/hooks'

const Media: FunctionComponent = () => {
  const { route } = useRoute()
  
  const { media, loading } = useMedia(
    'studio', 
    'v1.posts.show.media', 
    { postId: route.params.postId }
  )

  return (
    <div>
      
    </div>
  )
}

export default Media