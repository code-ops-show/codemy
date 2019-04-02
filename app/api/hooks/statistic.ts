import { useState, useEffect } from 'react'
import { StatisticType } from '~/api/studio/v1/typings'
import { get } from '~/api'

const defaultStatistic = { 
  total_duration: {
    member: 0,
    public: 0,
    registered: 0
  }
}

function useStatistic(name: string, path: string, params?: Object) {
  const [loading, setLoading] = useState<boolean>(true)
  const [statistic, setStatistic] = useState<StatisticType>(defaultStatistic)

  useEffect(() => {
    get(setLoading, setStatistic, name, path, params)
  }, [])

  return { loading, statistic }
}

export default useStatistic