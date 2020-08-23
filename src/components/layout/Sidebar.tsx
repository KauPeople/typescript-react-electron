import React from 'react'
import { Layout, Menu } from 'antd'
import { History } from 'history'
import { AppstoreOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Sider } = Layout
export interface SidebarProps {
  collapsed: boolean
  history: History
}
const Sidebar = (props: SidebarProps) => {
  const { collapsed, history } = props
  const AdvertiseImage = styled.div`
    margin-top: 200px;
    margin-left: 10px;
    width: 180px;
    height: 250px;
    background-color: #000;
    display: ${(props: { collapsed: boolean }) => {
      return props.collapsed ? 'none' : 'block'
    }};
  `
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="light"
          style={collapsed ? { width: 80 } : { width: 200 }}
          selectedKeys={[history.location.pathname.split('/')[1]]}
          mode="inline"
        >
          <Menu.Item onClick={() => history.push('/registers')} key="registers" icon={<AppstoreOutlined />}>
            상품 수집
          </Menu.Item>
          <Menu.Item onClick={() => history.push('/products')} key="products" icon={<AppstoreOutlined />}>
            상품 관리
          </Menu.Item>
          <Menu.Item onClick={() => history.push('/settings')} key="settings" icon={<AppstoreOutlined />}>
            오픈 마켓 설정
          </Menu.Item>
        </Menu>
        <AdvertiseImage collapsed={collapsed} />
      </Sider>
    </>
  )
}

export default Sidebar
