import React, { useState } from "react";
import {
  HomeFilled,
  ApiOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import { Card, Menu, Avatar, Layout } from "antd";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const [subMenuOpen, setSubMenuOpen] = useState([]);

  const handleClick = (e) => {
    setSelectedKeys([e.key]);
  };

  const menuList = [
    {
      id: 1,
      key: "admin",
      name: "POST Data",
      icon: <ApiOutlined className="sidebarIcon" />,
      link: "/",
      SubMenu: false,
    },
    {
      id: 2,
      key: "admin",
      name: "Bulk Data",
      icon: <CloudUploadOutlined className="sidebarIcon" />,
      link: "/blukData",
      SubMenu: false,
    },
  ];

  return (
    <Sider
      className="  overlayContainer "
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
      width={250}
      style={{
        backgroundColor: "#C9D5E3",
        height: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src="./logo.png" alt="" style={{ padding: "15px 20px 30px" }} />
      </div>

      <Menu
        style={{ backgroundColor: "#C9D5E3" }}
        mode="inline"
        selectedKeys={selectedKeys}
        onClick={handleClick}
        openKeys={subMenuOpen}
        onOpenChange={(openKeys) => {
          setSubMenuOpen(openKeys);
        }}
      >
        {menuList.map((x) => {
          if (x.SubMenu) {
            return (
              <SubMenu
                key={x.id}
                title={
                  <span>
                    <span style={{ marginRight: "5px" }}>{x.icon}</span>
                    <span>{x.name}</span>
                  </span>
                }
              >
                {x.SubMenuItems.map((sub) => {
                  return (
                    <Menu.Item key={sub.id}>
                      <Link to={sub.link}>{sub.name}</Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            if (x.key === "logout") {
              return (
                <Menu.Item key={x.id}>
                  <div style={{ display: "flex" }}>
                    <div>{x.icon}</div>
                    <div>
                      <span className="menuText">{x.name}</span>
                    </div>
                  </div>
                </Menu.Item>
              );
            } else {
              return (
                <Menu.Item key={x.id}>
                  <div style={{ display: "flex" }}>
                    <div>{x.icon}</div>
                    <div>
                      <Link to={x.link} className="menuText">
                        {x.name}
                      </Link>
                    </div>
                  </div>
                </Menu.Item>
              );
            }
          }
        })}
      </Menu>
      <div style={{ position: "absolute", width: "100%", bottom: "20px" }}>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <Card className="sidebarDiv">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Avatar
                  size={35}
                  src={<img src={`./user1.png`} alt="avatar" />}
                  style={{ marginRight: "15px" }}
                />
              </div>
              <div>
                <div>
                  <span className="appBarUserName">Harmanpreet Singh</span>
                </div>
                <div>
                  <span className="appBarUserType">Admin</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Sider>
  );
};
export default SideBar;
