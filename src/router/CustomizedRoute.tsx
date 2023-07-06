import { RouteObject, useRoutes } from 'react-router'
import { Suspense } from 'react'
import { routes } from './config'

const r = (): RouteObject[] =>
  routes.map((route) => ({
    ...route,
    element: (
      <Suspense fallback={route.fallback}>
        <route.element a={'asd'} />
      </Suspense>
    )
  }))

export default () => useRoutes(r())
