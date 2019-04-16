import * as React from 'react'
import { FunctionComponent, useEffect, useRef } from 'react'
import { usePost } from '~/api/hooks'
import { RouteProps } from 'typings/route'

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

  return (
    <div className='animated fadeIn'>
      <section id='hero' className={styles.hero}>
        <div className={hero.bg}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-grow'>
            <div className='mx-3 shadow-lg rounded'>
              <div className={styles.medium}></div>
              <div className='bg-white rounded-b'>
                <h1 className='text-black font-semibold p-5'>{post.title}</h1>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='mx-3'>playlist</div>
          </div>
        </div>
      </section>
      <section id='content' className={styles.content}>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto'>
          <div className='flex-1' ref={descriptionRef}>
            <div className='mx-3'>{renderHTML(post.description)}</div>
          </div>
          <div className='flex-grow'>
            <div className='mx-3'>stuff</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Show
