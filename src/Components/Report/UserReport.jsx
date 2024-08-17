import { Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import UserReportModal from "./UserReportModal";
import { useAllUserReportQuery, useReportEmotionsQuery } from "../../redux/api/dashboardApi";

const UserReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected_data, set_selected_data] = useState({})
  const { data: allUserReport, error, isLoading } = useAllUserReportQuery()
  // const {data  : reportEmotionData,error,isLoading} = useReportEmotionsQuery()


  console.log(allUserReport?.data?.result)
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // console.log(selected_data)

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
      render: (_) => <p>user</p>
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex justify-center">
          <FaEye className=" " size={20} onClick={() => {
            set_selected_data(record)
            setIsModalOpen(true)
          }} />
        </div>
      )
      ,
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={allUserReport?.data?.result || []} onChange={onChange} />
      <UserReportModal
      selected_data={selected_data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default UserReport;
