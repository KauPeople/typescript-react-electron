import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import { History } from 'history'
import Header from './Header'
import Sidebar from './Sidebar'

export interface LayoutProps {
  children: React.ReactNode
  history: History
}

const { Content } = AntdLayout
const Layout = ({ children, history }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <>
      <Header setCollapsed={setCollapsed} collapsed={collapsed} />
      <AntdLayout>
        <AntdLayout className="site-layout">
          <Sidebar history={history} collapsed={collapsed} />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </AntdLayout>
      </AntdLayout>
    </>
  )
}

export default Layout
