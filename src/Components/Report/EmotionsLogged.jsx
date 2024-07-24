import React from "react";
import EmotionTable from "./EmotionTable";
import UserReport from "./UserReport";
import { Tabs } from "antd";

const EmotionsLogged = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Emotions",
      children: <EmotionTable />,
    },
    {
      key: "2",
      label: "All User Report",
      children: <UserReport />,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default EmotionsLogged;
