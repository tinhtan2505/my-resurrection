import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
// import { logo } from "../../constants/options";

const { Header, Footer, Sider, Content } = Layout
const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  padding: 0,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1677ff',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const layoutStyle = {
  height: '100%',
  overflow: 'hidden',
}

interface MainPageProps {
  children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={layoutStyle}>
      <Sider width="280px" style={siderStyle} collapsed={collapsed}>
        {/* <div className="logo">{logo}</div> */}
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 48,
              height: 64,
            }}
          />
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default MainPage
