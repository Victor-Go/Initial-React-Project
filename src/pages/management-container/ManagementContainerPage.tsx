import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import styles from './ManagementContainer.module.scss'
import { IManagementAction } from './management-pages'
import { getAction } from './management-pages.config'
import { useLocation, useNavigate } from 'react-router'
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType
} from 'antd/es/breadcrumb/Breadcrumb'
import { SidebarSelectedContext } from '@src/contexts/SidebarSelectedContext'
import Authenticator from '@src/components/Authenticator/Authenticator'
import Sider from 'antd/es/layout/Sider'

const { Header, Content } = Layout

const PagesContainer = (): JSX.Element => {
  const navigate = useNavigate()

  const [sidebarSelectedKey, setSidebarSelectedKey] = useState('')

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const bc: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = []
  const [breadcrumb, setBreadcrumb] = useState(bc)
  const [action, setAction] = useState<any>(null)

  const location = useLocation()
  useEffect(() => {
    const { pathname } = location
    const elem: IManagementAction = getAction(pathname)
    if (!elem) {
      navigate('/')
      return
    }
    setBreadcrumb(elem?.breadcrumb)
    setAction(elem)
  }, [location])

  return (
    <SidebarSelectedContext.Provider
      value={[sidebarSelectedKey, setSidebarSelectedKey]}
    >
      <Authenticator />
      <Layout
        className={styles['management-container']}
        style={{ minHeight: '100vh' }}
      >
        <Sider />
        <Layout>
          <Header
            className={styles['management-container__header']}
            style={{ padding: 0, background: colorBgContainer }}
          >
            <div className={styles['header__right']}></div>
          </Header>
          <Content className={styles['content']}>
            <Breadcrumb items={breadcrumb}></Breadcrumb>
            <div
              style={{
                marginTop: '1.5rem',
                minHeight: 360
              }}
            >
              {action ? <action.element /> : <></>}
            </div>
          </Content>
        </Layout>
      </Layout>
    </SidebarSelectedContext.Provider>
  )
}

export default PagesContainer
