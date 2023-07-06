import { ComponentType, LazyExoticComponent } from 'react'

export interface IManagementAction {
  action: string | RegExp;
  element: LazyExoticComponent<ComponentType<any>>;
  breadcrumb: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
}
