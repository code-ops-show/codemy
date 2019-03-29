import * as React from 'react'
import { FunctionComponent } from 'react'

export type PlanType = {
  price: {
    value: string,
    explain: string,
    color: string
  },
  color: string,
  action: string,
  heading: string,
  points: string[]
}

const Explain: FunctionComponent<{text: string | null}> = ({ text }) => {
  if (!text) return null

  return (
    <p className='text-sm font-normal'>{text}</p>
  )
}

const Plan: FunctionComponent<PlanType> = props => {
  const { heading, points, price, color, action } = props

  return (
    <div className='mx-5 rounded-lg bg-white shadow-lg'>
      <h3 className={`bg-${color} p-5 text-center font-semibold text-3xl rounded-t-lg text-${price.color}`}>
        <p className='my-1'>{price.value}</p>
        <Explain text={price.explain} />
      </h3>
      <div className='p-5 bg-white'>
        <h4 className='mb-5 text-teal-light font-light text-2xl'>{heading}</h4>
        <ul className='text-black list-reset fa-ul'>
          {points.map((feature, index) =>
            <li key={`monthly_points_${index}`} className='py-2'>
              <span className='leading-normal fa-li text-xl'>
                <i className='fas fa-check text-teal-light'></i>
              </span>
              <span className='leading-normal'>{feature}</span>
            </li>)}
        </ul>
      </div>

      <div className='p-5'>
        <button className='p-3 text-white rounded w-full bg-teal shadow'>
          {action}
        </button>
      </div>
    </div>
  )
}

export { Plan }