import * as React from 'react'
import { FunctionComponent, useEffect, useRef, MouseEvent } from 'react'
import { usePost } from '~/api/hooks'
import { RouteProps } from 'typings/route'

import imaging from '~/helpers/imaging'

import Playlist from './playlist'
import Media from './media'

import Loader from '~/components/loader'

import renderHTML from 'react-render-html'
import Prism from 'prismjs'

import * as hero from '~/styles/hero.sass'
import * as styles from './index.sass'

const Show: FunctionComponent<RouteProps> = props => {
  const descriptionRef = useRef<HTMLDivElement>(null)
  const { route } = props

  const { post, loading } = usePost(
    'studio',
    'v1.posts.show',
    { postId: route.params.postId }
  )

  useEffect(() => {
    if (descriptionRef.current) {
      const codeBlocks = [].slice.call(
        descriptionRef.current.getElementsByTagName('code')
      )
      
      codeBlocks.forEach(element => Prism.highlightElement(element))
    }
  }, [loading])

  if (loading || !post) return <Loader />

  const coverPictureUrl: string | undefined = imaging(post.cover_picture_url, '1280', '720')

  return (
    <div className='animated fadeIn'>
      <section id='hero' className={styles.hero}>
        <div className={hero.bg}></div>
        <div className='flex items-stretch flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row relative container mx-auto text-white z-10 max-h-24'>
          <div className='w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4'>
            <div className='mx-3 mb-3 shadow-lg rounded'>
              <div className={styles.medium}>
                <Media title={post.title} coverPicture={coverPictureUrl} />
              </div>
              <div className='bg-white rounded-b'>
                <h1 className='text-black font-semibold p-5 text-xl'>{post.title}</h1>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4'>
            <div className='mx-3 sm:mx-3 md:mx-3 lg:mx-1 xl:mx-1 bg-white rounded shadow-lg'>
              <Playlist type='set' slug={post.set.slug} />
            </div>
          </div>
        </div>
      </section>
      <section id='content' className={styles.content}>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto'>
          <div className='flex-1' ref={descriptionRef}>
            <div className='mx-3'>{renderHTML(post.description)}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Show
