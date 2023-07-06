import { ComponentType, LazyExoticComponent } from 'react'
import { RouteObject } from 'react-router'

export interface IRoute {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  props?: any;
  children?: RouteObject[];
  fallback?: JSX.Element;
}
