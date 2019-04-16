import * as React from 'react'
import { FunctionComponent } from 'react'

import { usePosts } from '~/api/hooks'

import Loader from '~/components/loader'

import Item from './item'

import * as styles from './index.sass'

type PlaylistProps = {
  type: string
  slug: string
}

const Playlist: FunctionComponent<PlaylistProps> = props => {
  const { slug } = props
  const { posts, loading } = usePosts(
    'studio', 
    'v1.posts.search.sets.order', 
    { setId: slug, order: 'asc' }
  )

  if (loading) return <Loader />

  return (
    <div className={styles.playlist}>
      {posts.map((item, index) => 
        <Item key={`playlist_item_${index}`} index={index + 1} {...item} />
      )}
    </div>
  )
}

export default Playlist