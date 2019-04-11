import * as React from 'react'
import { FunctionComponent } from 'react'

import * as hero from '~/styles/hero.sass'
import * as styles from './index.sass'

const Show: FunctionComponent = () => {
  return (
    <div className='animated fadeIn'>
      <section id='hero' className={styles.hero}>
        <div className={hero.bg}></div>
      </section>
    </div>
  )
}

export default Show
