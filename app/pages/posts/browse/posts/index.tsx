import * as React from 'react'
import c from 'classnames'
import { FunctionComponent, MouseEvent, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRoute } from 'react-router5'

import Loader from '~/components/loader'

import { usePosts } from '~/api/hooks'
import { PostType } from '~/api/studio/v1/typings'

import * as styles from './index.sass'

import Post from './post'

type PostCollectionProps = {
  posts: PostType[],
  loading: boolean
}

const PostCollection: FunctionComponent<PostCollectionProps> = props => {
  const { posts, loading } = props

  if (loading) return <Loader />

  return (
    <>
      {posts.map((post, index) => (
        <Post key={`posts_browse_posts_${index}`} {...post} />
      ))}
    </>
  )
}

const Posts: FunctionComponent = () => {
  const { route, router } = useRoute()

  const { loading, posts, page, setPage, totalPages } = usePosts(
    'studio',
    'v1.posts.search.page',
    { page: route.params.page }
  )

  useEffect(() => {
    setPage(route.params.page)
  }, [route])

  const { t } = useTranslation('pages')

  function nextPage(e: MouseEvent): void {
    e.preventDefault()

    const newPage: string = page + 1

    router.navigate('posts.page', { page: newPage })
  }

  function prevPage(e: MouseEvent): void {
    e.preventDefault()

    const newPage: string = (parseInt(page) - 1).toString()

    router.navigate('posts.page', { page: newPage })
  }

  const pages = [...Array(totalPages).keys()]

  return (
    <>
      <div className='flex flex-wrap mx-2'>
        <PostCollection posts={posts} loading={loading} />
      </div>
      <div className='flex flex-wrap justify-center my-10'>
        <button
          onClick={prevPage}
          className={c('p-2 text-white bg-teal rounded-full mr-5', {
            ['opacity-50 cursor-not-allowed']: page === '1'
          })}
        >
          <i className='fas fa-arrow-circle-left fa-2x'></i>
        </button>
        <div className={styles.pagination}>{pages.map(p => 
          <Link 
            key={`page_link_${p + 1}`}
            routeName='posts.page'
            activeClassName={styles.active}
            routeParams={{ page: (p + 1).toString() }}>{p + 1}</Link>)}
        </div>
        <button onClick={nextPage} className={c('p-2 text-white bg-teal rounded-full', {
            ['opacity-50 cursor-not-allowed']: page === totalPages.toString()
          })}>
          <i className='fas fa-arrow-circle-right fa-2x'></i>
        </button>
      </div>
    </>
  )
}

export default Posts
