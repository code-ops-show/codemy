import * as React from 'react'
import { FunctionComponent, useState, useEffect, Dispatch } from 'react'

import PostProps from 'typings/post'

import Loader from '~/components/loader'

import MemberButton from '../member_button'

import Post from './post'

import { usePosts } from '~/api/hooks'

const RecentUploads: FunctionComponent = () => {
  const {loading, posts } = usePosts('studio', 'v1.posts.search.page', { page: 1 })

  if (loading) return <Loader />

  return (
    <div className='container mx-auto mt-20'>
      <div className='flex content-start flex-wrap'>
        {posts.map(post => (
          <Post key={`post_${post.slug}`} {...post} />
        ))}
      </div>

      <MemberButton />
    </div>
  )
}

export default RecentUploads
