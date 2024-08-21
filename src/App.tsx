import { Button, Layout } from "antd";
import "./App.css";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  padding: 0,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  height: "100%",
  overflow: "hidden",
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle} collapsible collapsed={collapsed}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 48,
                height: 64,
              }}
            />
          </Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
