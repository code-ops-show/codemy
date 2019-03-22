import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'

import imaging from '~/helpers/imaging'
import humanizeDuration from '~/helpers/duration'

import * as styles from './post.sass'

import PostProps from 'typings/post'

const Post: FunctionComponent<PostProps> = props => {
  const { title, duration, cover_picture_url } = props

  const imageUrl = imaging(cover_picture_url, '640', '360')
  const friendlyDuration = humanizeDuration(duration)

  return (
    <div
      className='w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 my-5'
      data-aos='fade-up'
    >
      <div className='mx-5'>
        <div className='relative'>
          <img
            src={imageUrl}
            alt={title}
            className='w-full rounded shadow-md mb-5'
          />
          <span
            className={c(
              styles.duration,
              'absolute pin-b bg-black text-white text-xs p-1 rounded-sm'
            )}
          >
            {friendlyDuration.minutes}:{friendlyDuration.seconds}
          </span>
        </div>
        <p className='leading-normal text-grey-darker'>{title}</p>
      </div>
    </div>
  )
}

export default Post
