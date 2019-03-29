import * as React from 'react'
import { FunctionComponent, useState, useEffect, Dispatch } from 'react'

import PostProps from 'typings/post'

import Loader from '~/components/loader'

import MemberButton from '../member_button'

import Post from './post'

import api from '~/api'

const getPosts = async (dispatch: Dispatch<Array<PostProps>>) => {
  const response = await fetch(
    api('studio', 'v1.posts.search.page', { page: 1 })
  )
  const json = await response.json()

  dispatch(json.data)
}

const RecentUploads: FunctionComponent = () => {
  const [posts, setPosts] = useState<Array<PostProps>>([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  if (posts.length === 0) return <Loader />

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
