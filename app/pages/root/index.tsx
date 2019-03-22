import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import SignUp from './sign_up'
import Topics from './topics'
import Features from './features'
import RecentUploads from './recent_uploads'
import Statistics from './statistics'

import stats from './stats.svg'

import * as styles from './index.sass'

const Root:FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <>
      <section id='hero' className='py-10 relative z-0'>
        <div className={c(styles.bg, '')}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mx-5 mb-6'>
            <h1 className='mb-10 font-normal antialiased text-5xl mr-20'>{t('root.slogan')}</h1>
            <p className='leading-normal font-normal text-2xl mr-12'>{t('root.description')}</p>
          </div>
          <div className='flex-1 mx-5 animated fadeIn'>
            <SignUp />
          </div>
        </div>
      </section>
      <section id='what' className='pt-10'>
        <div className='container mx-auto'>
          <h2 className='font-normal text-4xl text-center text-black'>{t('root.what.heading')}</h2>
          <p className='text-grey-darkest text-center my-5 text-lg leading-normal max-w-sm mx-auto px-5'>{t('root.what.description')}</p>
        </div>

        <Topics />
      </section>
      <section id='how' className={c(styles.how, 'pt-20 pb-10')}>
        <div className='container mx-auto'>
          <h2 className='font-normal text-4xl text-center text-denim-darker mx-5 leading-normal'>{t('root.how.heading')}</h2>
        </div>

        <Features />
      </section>
      <section id='recent_uploads' className='pt-20'>
        <div className='container mx-auto'>
          <h2 className='font-normal text-4xl text-center text-black'>{t('root.recent_uploads.heading')}</h2>
        </div>

        <RecentUploads />
      </section>
      <section id='statistics' className='bg-grey pt-20 pb-10'>
        <div className='container mx-auto'>
          <h2 className='font-normal text-4xl text-center text-black'>{t('root.statistics.heading')}</h2>
        </div>

        <div className='flex container mx-auto flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mt-20'>
          <div className='flex-1 z-10'>
            <Statistics />
          </div>
          <div className='flex-1 ml-10 relative z-0'>
            <img src={stats} className={c('absolute', styles.stat_graphic)} alt={t('root.statistics.heading')} />
          </div>
        </div>
      </section>
      <section id='about' className={c(styles.about, 'bg-black')}>
        <div className='flex flex-col container mx-auto py-20 text-center'>
          <div className='text-white mb-10'>
            <i className='far fa-play-circle fa-4x'></i>
          </div>
          <h2 className='text-4xl text-white font-normal my-5'>{t('root.about.heading')}</h2>
          <p className='text-white'>{t('root.about.subtext')}</p>
        </div>
      </section>
    </>
  )
}

export default Root