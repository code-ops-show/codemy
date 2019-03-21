import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

const MemberButton: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <div className='text-center my-20'>
      <button className='p-5 bg-teal text-white shadow rounded hover:bg-teal-light'>
        {t('root.call_to_action')}
      </button>
    </div>
  )
}

export default MemberButton
