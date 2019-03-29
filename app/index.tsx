import * as React from 'react'
import { render } from 'react-dom'
import { RouterProvider } from 'react-router5'
import AOS from 'aos'

import createRouter from './router'

import './i18n'
import 'typeface-open-sans'
import { Application } from './layout'

const router = createRouter({
  listener: true,
  logger: true
})

document.addEventListener('DOMContentLoaded', () => {
  AOS.init()

  router.start(() =>
    render(
      <RouterProvider router={router}>
        <Application />
      </RouterProvider>,
      document.getElementById('app')
    )
  )
})

