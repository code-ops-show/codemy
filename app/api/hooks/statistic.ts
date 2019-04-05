import { useState, useEffect } from 'react'
import { StatisticType } from '~/api/studio/v1/typings'
import { get, SingletonResponse } from '~/api'

type StatisticResponse = SingletonResponse<StatisticType>

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

  function beforeStart() {
    setLoading(true)
  }

  function onSingletonLoad(json: StatisticResponse) {
    setStatistic(json.data)
    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onSingletonLoad, name, path, params)
  }, [])

  return { loading, statistic }
}

export default useStatistic