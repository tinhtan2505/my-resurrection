import React, { useState } from "react";
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  LaptopOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { logo } from "../../constants/options";
import {
  iconProject,
  iconGift,
  iconTransactions,
  iconPayment,
  iconInvoice,
  iconUser,
} from "../../constants/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  color: "#000",
  height: 80,
  padding: 0,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

const contentStyle: React.CSSProperties = {};

const siderStyle: React.CSSProperties = {
  backgroundColor: "#1d1d1d",
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

interface MainPageProps {
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("My project", "project", iconProject),
  getItem("Customer gifts", "gifts", iconGift),
  getItem("Transactions", "transactions", iconTransactions),
  getItem("Payment", "payment", iconPayment),
  getItem("Invoice", "invoice", iconInvoice),
  getItem("Your account", "account", iconUser),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
];

const routeTitles: Record<string, string> = {
  "/": "Home",
  "/project": "My Project",
  "/gifts": "Customer Gifts",
  "/transactions": "Transactions",
  "/payment": "Payment",
  "/invoice": "Invoice",
  "/account": "Your Account",
};

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  var currentRouteName = routeTitles[location.pathname] || "";

  if (currentRouteName === "My Project") {
    currentRouteName = "Project Management";
  }

  const onMenuClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };

  const handleLogout = () => {
    // Xóa token khỏi localStorage/sessionStorage
    localStorage.removeItem("token"); // Hoặc sessionStorage.removeItem("token")

    // Chuyển hướng về trang đăng nhập
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item
        key="profile"
        icon={<UserOutlined />}
        onClick={() => navigate("/profile")}
      >
        Thông tin
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={layoutStyle}>
      <Sider width="280px" style={siderStyle} collapsed={collapsed}>
        <div className="logo">
          <Link to="/">{!collapsed ? logo : <></>}</Link>
        </div>
        <Menu
          className="text-base"
          style={{ backgroundColor: "#1d1d1d", flex: 1 }}
          theme="dark"
          defaultSelectedKeys={[""]}
          mode="inline"
          items={items}
          onClick={onMenuClick}
        />
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="flex items-center cursor-pointer p-4 border-t text-white">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <span style={{ marginLeft: 8 }}>
              {!collapsed ? "Nguyễn Quốc Tĩnh" : ""}
            </span>
          </div>
        </Dropdown>
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

          <span className="text-2xl font-bold">{currentRouteName}</span>
        </Header>
        <Content style={contentStyle}>{children}</Content>
        {/* <Footer style={footerStyle}>
          <div className="pl-2 text-green-400">Hello world!</div>
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainPage;
