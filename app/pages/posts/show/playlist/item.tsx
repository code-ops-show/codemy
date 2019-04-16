import * as React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router5'

import imaging from '~/helpers/imaging'

import * as styles from './item.sass'

type ItemProps = {
  index: number
  title: string
  slug: string
  cover_picture_url: string
  duration: number,
  set: {
    slug: string
  }
}

const Item: FunctionComponent<ItemProps> = props => {
  const { cover_picture_url, title, index, slug, set } = props

  const imageUrl = imaging(cover_picture_url, '128', '72')

  return (
    <Link routeName='posts.show.sets' routeParams={{ postId: slug, setId: set.slug }}
      className={styles.item} activeClassName={styles.active}>
      <div className='flex flex-no-wrap'>
        <div className='flex-shrink'>
          <span className='text-xs mr-2 w-3 block'>{index}</span>
        </div>
        <div className='flex-no-shrink'>
          <img src={imageUrl} className='rounded-sm w-16' />
        </div>
        <div className='flex-grow'>
          <div className='ml-2'>
            <h4 className='leading-normal text-xs font-light'>{title}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Item
