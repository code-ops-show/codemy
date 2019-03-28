import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'

import * as styles from './criterion.sass'

export interface CriterionProps {
  name: string
  icon: string
  color: string
  tags: Array<string>
}

const Criterion: FunctionComponent<CriterionProps> = (props) => {
  const { icon, color, name, tags } = props

  return (
    <div className={styles.criterion} data-aos='fade-up'>
      <div className={`flex-no-shrink mr-5 p-5 bg-${color} text-white rounded-full`}>
        <i className={c(icon, 'w10 h-10')}></i>
      </div>
      <div className='flex-grow'>
        <h3 className='mt-2 text-denim-dark font-normal mb-3'>{name}</h3>
        {tags.map(tag => 
          <span key={`tag_${tag}`} className={styles.tag}>
            <a href='#' className='text-grey-darker hover:text-denim-light'>{tag}</a>
          </span>)}
      </div>
    </div>
  )
}

export { Criterion }