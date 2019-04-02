import * as React from 'react'
import { FunctionComponent } from 'react'

import { PostType } from '~/api/studio/v1/typings'

const Post: FunctionComponent<PostType> = props => {
  const { title } = props

  return (
    <div className='w-1/2'>
      {title}
    </div>
  )
}

export default Post
