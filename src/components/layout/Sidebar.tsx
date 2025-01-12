import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole ={
  admin: "admin",
  faculty: "faculty",
  student: "student",
}

 

const Sidebar = () => {
const role = "admin" // Change this to test the sidebar items for different roles;

let sidebarItems 

switch (role) {
  case userRole.admin:
    sidebarItems = sidebarItemGenerator(adminPaths, userRole.admin);
    break;
  case userRole.faculty:
    sidebarItems = sidebarItemGenerator(facultyPaths, userRole.faculty);
    break;
  case userRole.student:
    sidebarItems = sidebarItemGenerator(studentPaths, userRole.student);
    break;

  default:
    break;
}

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: "36px",
          paddingTop: ".2rem",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      >
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
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
