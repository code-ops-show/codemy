import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import humanizeDuration from '~/helpers/duration'

type DurationProps = {
  id: string
  duration: number
}

const colors: {[key: string]: string} = {
  member: 'purple',
  public: 'blue',
  registered: 'green'
}

const Duration: FunctionComponent<DurationProps> = props => {
  const { id, duration } = props
  const { t } = useTranslation('pages')

  const friendlyDuration = humanizeDuration(duration)
  const { minutes, seconds } = friendlyDuration

  return (
    <div className={c('flex rounded font-semibold bg-white border-l-8 p-10 shadow-lg mb-6', `border-${colors[id]}`)}>
      <div className='flex-shrink text-teal-dark text-4xl mr-5'>
        {minutes}:{seconds}
      </div>
      <div className='flex-grow text-denim-dark text-center leading-normal font-normal'>
        {t(`root.statistics.durations.${id}`)}
      </div>
    </div>
  )
}

export default Duration
