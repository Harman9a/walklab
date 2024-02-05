import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  HomeFilled,
  LogoutOutlined,
  SettingOutlined,
  ApiOutlined,
  CloudUploadOutlined,
  CodepenOutlined,
  CheckSquareOutlined,
  FileDoneOutlined,
  CloseCircleOutlined,
  RetweetOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Card, Menu, Avatar, Layout } from "antd";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutAc } from "../../Redux/Actions";
import axios from "axios";

const SideBar = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  const routerParms = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.persistedReducer);

  const [menuList, setMenuList] = useState([]);
  const [userAccess, setUserAccess] = useState([]);
  const [ActiveRoleName, setActiveRoleName] = useState();

  // const [menuActiveId, setMenuActiveId] = useState("4");
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const [subMenuOpen, setSubMenuOpen] = useState([]);

  const routeLocation = useLocation();

  useEffect(() => {
    // getUserRole();
  }, []);

  useEffect(() => {}, [routeLocation]);

  const handleLogout = () => {
    dispatch(handleLogoutAc());
    navigate("/login");
  };

  const createMenuList = (access) => {
    let AllMenu = [
      {
        id: 1,
        key: "admin",
        name: "Dashboard",
        icon: <HomeFilled className="sidebarIcon" />,
        link: "/ResultDashboard",
        SubMenu: false,
      },

      {
        id: 2,
        key: "admin",
        name: "Show POST Data",
        icon: <ApiOutlined className="sidebarIcon" />,
        link: "/PostApi",
        SubMenu: false,
      },
      {
        id: 3,
        key: "admin",
        name: "Upload Files",
        icon: <CloudUploadOutlined className="sidebarIcon" />,
        link: "/FileUpload",
        SubMenu: false,
      },
    ];

    let countID = 1;
    let ActiveMenu = [];

    access.map((x) => {
      AllMenu.map((y) => {
        if (x.key === y.key) {
          y.id = countID;
          ActiveMenu.push(y);
          countID++;
        }
      });
    });

    AllMenu.map((x) => {
      if (x.key === "settings") {
        ActiveMenu.push(x);
        countID++;
      }
      if (x.key === "logout") {
        ActiveMenu.push(x);
        countID++;
      }
    });

    let adminCount = 1;
    access.map((x) => {
      if (x.key === "admin") {
        ActiveMenu = [];
        AllMenu.map((z) => {
          if (z.key == "admin") {
            z.id = adminCount;
            ActiveMenu.push(z);
            adminCount++;
          }
          if (z.key === "settings") {
            ActiveMenu.push(z);
            countID++;
          }
          if (z.key === "logout") {
            ActiveMenu.push(z);
            countID++;
          }
        });
      }
    });

    if (routeLocation.pathname === "/") {
      navigate(ActiveMenu[0].link);
    }

    setMenuList(ActiveMenu);
  };

  const handleClick = (e) => {
    setSelectedKeys([e.key]);
  };

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
                <Menu.Item key={x.id} onClick={() => handleLogout()}>
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
                  src={
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/${selector.user.photo}`}
                      alt="avatar"
                    />
                  }
                  style={{ marginRight: "15px" }}
                />
              </div>
              <div>
                <div>
                  <span className="appBarUserName">
                    {selector.user.f_name} {selector.user.l_name}
                  </span>
                </div>
                <div>
                  <span className="appBarUserType"> {ActiveRoleName}</span>
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
