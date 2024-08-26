import { Modal, Progress, Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import {  useReportTestNameQuery } from "../../redux/api/dashboardApi";

const ReportTable = () => {
  const {data : reports, error, loading} = useReportTestNameQuery()
  const tableData = reports?.data?.map((report, i)=>({
    key : i+1,
    testName : report?.name,
    percentage : report?.totalPercentage,
    likelyUnmet : report?.likelyUnmet,
    moderateUnmet : report?. moderateUnmet,
    wellUnmet : report?.wellUnmet

  }))
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState()
  const handleModal = (value)=>{
    setIsModalOpen(true)
    setModalValue(value)
  }
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Test name",
      dataIndex: "testName",
      key: "testName",
    },

    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      render: (percentage) => <Progress percent={percentage} size="small" />,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center "><FaEye onClick={() =>handleModal(record)} className=" " size={20} /></div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <Table columns={columns} dataSource={tableData} pagination={false} />

        {/* modal   */}

        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <h1 className="text-xl font-semibold py-4 ">Safety Result Report </h1>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Likely Unmet</p>
            <Progress percent={modalValue?.likelyUnmet} size="small" />
          </div>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Moderately Unmet</p>
            <Progress percent={modalValue?.moderateUnmet} size="small" />
          </div>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Well Unmet</p>
            <Progress percent={modalValue?.wellUnmet} size="small" />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReportTable;
