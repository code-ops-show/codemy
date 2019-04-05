import * as React from 'react'
import c from 'classnames'
import { FunctionComponent, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import Loader from '~/components/loader'

import { usePosts } from '~/api/hooks'

import Post from './post'

const Posts: FunctionComponent = () => {
  const { loading, posts, page, setPage } = usePosts(
    'studio',
    'v1.posts.search.page'
  )
  const { t } = useTranslation('pages')

  function nextPage(e: MouseEvent): void {
    e.preventDefault()
    setPage(page + 1)
  }

  function prevPage(e: MouseEvent): void {
    e.preventDefault()

    if (page !== 1) setPage(page - 1)
  }

  if (loading) return <Loader />

  return (
    <>
      <div className='flex flex-wrap mx-2'>
        {posts.map((post, index) => (
          <Post key={`posts_browse_posts_${index}`} {...post} />
        ))}
      </div>
      <div className='text-center my-10'>
        <button
          onClick={prevPage}
          className={c('p-2 text-white bg-teal rounded-full mr-5', {
            ['opacity-50 cursor-not-allowed']: page === 1
          })}
        >
          <i className='fas fa-arrow-circle-left fa-2x'></i>
        </button>
        <button onClick={nextPage} className='p-2 text-white bg-teal rounded-full'>
          <i className='fas fa-arrow-circle-right fa-2x'></i>
        </button>
      </div>
    </>
  )
}

export default Posts
