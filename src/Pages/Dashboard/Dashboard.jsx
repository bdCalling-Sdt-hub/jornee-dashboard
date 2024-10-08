import { Input, Layout, Badge, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
// import LogoText from "../../assets/logo-text.jpg";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard, MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const { Header, Sider, Content } = Layout;
import { PoweroffOutlined, SettingOutlined } from "@ant-design/icons";
import { RiFileEditLine } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { useGetUserInfoQuery } from "../../redux/api/userApi";
import { FaRegUser } from "react-icons/fa6";

const Dashboard = () => {
  const { pathname } = useLocation();
  const { data: userInfo, isError, isLoading } = useGetUserInfoQuery();

  const baseUrl = "https://server.jorneehq.com/";
  const imageUrl = `${baseUrl}${userInfo?.data?.profile_image}`;
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
      path: "/subscription",
      icon: <TbUserPlus size={24} />,
    },
    {
      title: "Test",
      path: "/test",
      icon: <HiOutlineClipboardDocumentList size={24} />,
    },
    {
      title: "Report",
      path: "/report",
      icon: <RiFileEditLine size={24} />,
    },
    {
      title: "Resources",
      path: "/resources",
      icon: <GrResources size={24} />,
    },
    {
      title: "Notifications",
      path: "/notifications",
      icon: <MdOutlineNotificationsActive size={24} />,
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
        width="293px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "white",
          paddingRight: "10px",
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
              {userInfo?.data?.profile_image ? (
                <img
                  src={imageUrl}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  alt=""
                />
              ) : (
                <FaRegUser size={30} />
              )}

              <div>
                <p className="p-3 h-3 font-semibold">
                  {" "}
                  {userInfo?.data?.name}{" "}
                </p>
                <p className="p-3"> {userInfo?.data?.role} </p>
              </div>
            </div>
          </Link>
        </Header>

        <Content
          style={{
            marginTop: "60px",
            marginLeft: "20%",
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
