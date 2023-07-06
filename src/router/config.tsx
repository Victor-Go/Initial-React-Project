import { lazy } from 'react'

import { IRoute } from './router'
import Fallback from '@src/components/Fallback/Fallback'

const defaultOptions = {
  caseSensitive: false,
  authRequired: false
}

export const SpecialRoutePaths = {
  notFound: '*',
  rootPage: '/',
  authentication: '/authentication'
}

export const routes: IRoute[] = [
  {
    path: SpecialRoutePaths.notFound,
    element: lazy(() => import('@src/pages/not-found/NotFoundPage')),
    fallback: <Fallback />
  },
  {
    path: SpecialRoutePaths.rootPage,
    element: lazy(() => import('@pages/root-page/RootPage')),
    fallback: <Fallback />
  },
  {
    path: SpecialRoutePaths.authentication,
    element: lazy(() => import('@pages/authentication/AuthenticationPage')),
    fallback: <Fallback />
  },
  {
    path: '/manage/:action',
    element: lazy(
      () => import('@src/pages/management-container/ManagementContainerPage')
    ),
    fallback: <Fallback />
  },
  {
    path: '/manage/:action/:arg',
    element: lazy(
      () => import('@src/pages/management-container/ManagementContainerPage')
    ),
    fallback: <Fallback />
  }
].map((route) => ({ ...defaultOptions, ...route }))
