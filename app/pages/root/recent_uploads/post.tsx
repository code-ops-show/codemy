import * as React from 'react'
import { FunctionComponent } from 'react'

import PostProps from 'typings/post'

const Post: FunctionComponent<PostProps> = props => {
  const { title, duration, cover_picture_url } = props

  return (
    <div>
      {title}
    </div>
  )
}

export default Post
