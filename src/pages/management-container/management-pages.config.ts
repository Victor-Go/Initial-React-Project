import { lazy } from 'react'
import { IManagementAction } from './management-pages'
import i18next from 'i18next'

export const breadcrumbs = {
  notFound: [{ title: i18next.t('Error.Error') }, { title: i18next.t('Error.404') }]
}

// Actions should be added before NotFound
export const managementActions: IManagementAction[] = [
  {
    action: /.*/,
    element: lazy(() => import('@src/pages/not-found/NotFoundPage')),
    breadcrumb: breadcrumbs.notFound
  }
]

export const getAction = (pathname: string): IManagementAction => {
  pathname = pathname.replace(/\/$/, '')
  return managementActions.find(a => a.action instanceof RegExp ? a.action.test(pathname) : a.action === pathname) as IManagementAction
}