import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "User menegment",
    label: "User menegment",
    children: [
      {
        key: "11",
        label: "Admin menegement",
      },
      {
        key: "21",
        label: "Student menegement",
      },
    ],
  },
];
function MainLayout() {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{ height: "36px", paddingTop:".2rem", background: "rgba(255, 255, 255, 0.2)" }}>
            <h3
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              PH Uni
            </h3>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet/>     
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
