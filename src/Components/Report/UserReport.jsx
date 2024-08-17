import { Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import UserReportModal from "./UserReportModal";
import { useAllUserReportQuery, useReportEmotionsQuery } from "../../redux/api/dashboardApi";
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
  const {data : allUserReport, error, isLoading} =  useAllUserReportQuery()
  // const {data  : reportEmotionData,error,isLoading} = useReportEmotionsQuery()

  const tableFormattedData = allUserReport?.data?.result?.map(items => ({
  }))
  console.log(allUserReport?.data?.result)
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
        <div className="flex justify-center">
        <FaEye className=" " size={20} onClick={() => setIsModalOpen(true)} />
        </div>
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
