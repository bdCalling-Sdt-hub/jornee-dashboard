import React from "react";
import BackButton from "../BackButton";
import Profile from "../Profile";
import ChangePassword from "../ChangePassword";
import { Tabs } from "antd";

const Setting = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Edit Profile",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Change Password ",
      children: <ChangePassword />,
    },
  ];
  return (
    <div>
      <div style={{ margin: "25px 0" }}>
        <BackButton link="/" />
      </div>
      <div
        style={{ marginBottom: "16px" }}
        className=" mt-5 bg-white p-5 px-10 rounded-xl "
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Setting;
