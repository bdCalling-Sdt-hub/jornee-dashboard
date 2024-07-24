import { Table, Tabs } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import HistoryModal from "./HistoryModal";
const data = [
  {
    key: "1",
    testName: "Lorem ipsum dolor sit consectetur elit.",
  },
  {
    key: "2",
    testName: "Lorem ipsum dolor sit consectetur elit.",
  },
  {
    key: "3",
    testName: "Lorem ipsum dolor sit consectetur elit.",
  },
  {
    key: "4",
    testName: "Lorem ipsum dolor sit consectetur elit.",
  },
  {
    key: "5",
    testName: "Lorem ipsum dolor sit consectetur elit.",
  },
];

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "",
      dataIndex: "testName",
      key: "testName",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <FaEye
          onClick={() => setIsModalOpen(true)}
          className="mx-auto "
          size={20}
        />
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Test Reminders",
      children: (
        <Table columns={columns} dataSource={data} pagination={false} />
      ),
    },
    {
      key: "2",
      label: "Reflections Reminders",
      children: (
        <Table columns={columns} dataSource={data} pagination={false} />
      ),
    },
    {
      key: "3",
      label: "Inspirational",
      children: (
        <Table columns={columns} dataSource={data} pagination={false} />
      ),
    },
  ];
  return (
    <div>
      <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
      <HistoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default History;
