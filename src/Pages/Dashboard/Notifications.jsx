import React from "react";
import Notification from "../../Components/Notifications/Notification";
import History from "../../Components/Notifications/History";
import { Tabs } from "antd";

const Notifications = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Notifications",
      children: <Notification />,
    },
    {
      key: "2",
      label: "History",
      children: <History />,
    },
  ];
  return (
    <div className=" mt-5 ms-5">
      {" "}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Notifications;
