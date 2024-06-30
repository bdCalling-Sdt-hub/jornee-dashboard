import { Input, Layout, Badge, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
// import LogoText from "../../assets/logo-text.jpg";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const { Header, Sider, Content } = Layout;
import { PoweroffOutlined, SettingOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard size={24} />,
    },
    {
      title: "User Management",
      path: "/user-list",
      icon: <LuUser size={24} />,
    },
    {
      title: "Subscription Management",
      path: "/make-admin",
      icon: <TbUserPlus size={24} />,
    },
  ];

  const linkItems2 = [
    {
      title: "Setting",
      path: "/setting",
      icon: <SettingOutlined size={28} />,
    },
    {
      title: "LogOut",
      path: "/login",
      icon: <PoweroffOutlined size={28} />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="253px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "white",
          paddingRight: "20px",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "100%",
            marginTop: 0,
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "34px",
                position: "relative",
                marginBottom: "10px",
                paddingLeft: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.path === pathname ? (
                <div
                  style={{
                    backgroundColor: "#7D4C48",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "8px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "0 10px 10px 0",
                  }}
                ></div>
              ) : null}
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor:
                    item.path === pathname ? "#7D4C48" : "transparent",
                  color: item.path === pathname ? "#fff" : "black",
                  alignItems: "center",
                  margin: "auto  0 auto 0",
                  gap: "14px",
                  padding: "7px 14px 7px",
                  borderRadius: "5px",
                  fontWeight: "700",
                }}
              >
                <div style={{ height: "24px" }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: "14px",

                    height: "fit-content",
                  }}
                >
                  {item.title}
                </div>
              </Link>
            </li>
          ))}

          <p className=" border border-gray-100 mx-2 rounded mt-5"></p>

          {linkItems2.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "34px",
                position: "relative",
                marginBottom: "10px",
                paddingLeft: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.path === pathname ? (
                <div
                  style={{
                    backgroundColor: "#7D4C48",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "7px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "0 10px 10px 0",
                  }}
                ></div>
              ) : null}
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor:
                    item.path === pathname ? "#7D4C48" : "transparent",
                  color: item.path === pathname ? "#fff" : "black",
                  alignItems: "center",
                  margin: "auto  0 auto 0",
                  gap: "14px",
                  padding: "7px 14px 7px",
                  borderRadius: "5px",
                  fontWeight: "700",
                }}
              >
                <div style={{ height: "24px" }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: "14px",

                    height: "fit-content",
                  }}
                >
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
            paddingLeft: "270px",
            paddingTop: "30px",
            paddingBottom: "30px",
            alignItems: "center",
          }}
        >
          <div></div>
          <Link to="/setting">
            <div className=" flex items-center  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                }}
                alt=""
              />
              <div>
                <p className="p-3 h-3"> DR. Jim ahhmed </p>
                <p className="p-3"> ADMIN </p>
              </div>
            </div>
          </Link>
        </Header>

        <Content
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            marginLeft: "255px",
            marginRight: "40px",
            background: "#F1F2F6",
            overflow: "auto",
            padding: "20px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
