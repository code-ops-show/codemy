import * as React from 'react'
import { FunctionComponent } from 'react'
import { SetType } from '~api/typings/studio/v1'
import { useTranslation } from 'react-i18next'

import imaging from '~/helpers/imaging'

const Set: FunctionComponent<SetType> = props => {
  const { t } = useTranslation('pages')

  const { color, name, updated_at_ago, icon_url } = props

  const imageUrl = imaging(icon_url, '256', '256')

  return(
    <div className='w-full block sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
      <div className='bg-white rounded m-3 p-5 shadow-md'>
        <div className='flex'>
          <div className='flex-none text-center w-16 h-16 mr-5 rounded shadow-inner' style={{ backgroundColor: color }}>
            <img src={imageUrl} className='p-1' />
          </div>
          <div className='flex-grow my-2'>
            <h3 className='font-normal text-lg mb-3'>{name}</h3>
            <p className='text-sm text-grey-dark'><span>{t('posts.browse.sets.last_updated')}</span> {updated_at_ago}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export { Set }