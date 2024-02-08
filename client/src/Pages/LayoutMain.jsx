import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./Layout/SideBar";
import HeaderCom from "./Layout/HeaderCom";

const { Content } = Layout;

const LayoutMain = () => {
  return (
    <>
      <Layout>
        <SideBar />
        <Layout style={{ backgroundColor: "#f6f8fb" }}>
          <HeaderCom />
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "auto",
              height: "80vh",
              background: "#F6F8FB",
            }}
          >
            <div
              style={{
                height: "100%",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutMain;
