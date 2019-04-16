import * as React from 'react'
import dayjs from 'dayjs'
import { FunctionComponent } from 'react'
import { Link } from 'react-router5'

import { PostType } from '~/api/studio/v1/typings'

import imaging from '~/helpers/imaging'

import * as styles from './post.sass'

const Post: FunctionComponent<PostType> = props => {
  const { title, cover_picture_url, published_at, slug, set } = props 

  const imageUrl: string | undefined = imaging(cover_picture_url, '960', '540') 

  return (
    <div className='w-full block sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/6'>
      <Link routeName='posts.show.sets' className='no-underline' routeParams={{ postId: slug, setId: set.slug }}>
        <div className='mx-3 my-3'>
          <div className={styles.placeholder}>
            <img src={imageUrl} className='rounded shadow' />
          </div>
          <h3 className='mb-2 text-black leading-normal lg:text-sm xl:text-sm'>{title}</h3>
          <p className='mb-6 text-grey-dark lg:text-sm xl:text-sm'>{dayjs(published_at).format('DD MMM YYYY')}</p>
        </div>
      </Link>
    </div>
  )
}

export default Post
