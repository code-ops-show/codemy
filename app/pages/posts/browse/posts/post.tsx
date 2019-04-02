import * as React from 'react'
import dayjs from 'dayjs'
import { FunctionComponent } from 'react'

import { PostType } from '~/api/studio/v1/typings'

import imaging from '~/helpers/imaging'

const Post: FunctionComponent<PostType> = props => {
  const { title, cover_picture_url, published_at } = props

  const imageUrl: string | undefined = imaging(cover_picture_url, '1280', '720') 

  return (
    <div className='w-full block sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
      <div className='mx-3 my-3'>
        <img src={imageUrl} className='rounded shadow-md mb-2' />
        <h3 className='mb-2 text-black leading-normal'>{title}</h3>
        <p className='mb-6 text-grey-dark'>{dayjs(published_at).format('DD MMM YYYY')}</p>
      </div>
    </div>
  )
}

export default Post
