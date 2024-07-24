import { Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import UserReportModal from "./UserReportModal";
const data = [
  {
    key: "1",
    user: "user",
  },
  {
    key: "2",
    user: "user",
  },
  {
    key: "3",
    user: "user",
  },
  {
    key: "4",
    user: "user",
  },
  {
    key: "5",
    user: "user",
  },
];
const UserReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Anonymous User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <FaEye className=" " size={20} onClick={() => setIsModalOpen(true)} />
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <UserReportModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default UserReport;
