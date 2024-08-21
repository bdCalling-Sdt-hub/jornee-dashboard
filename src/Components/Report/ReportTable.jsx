import { Modal, Progress, Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import {  useReportTestNameQuery } from "../../redux/api/dashboardApi";
const data = [
  {
    key: "1",
    testName: "Connection",
    percentage: 30,
  },
  {
    key: "2",
    testName: "Safety",
    percentage: 50,
  },
  {
    key: "3",
    testName: "Appreciation",
    percentage: 40,
  },
  {
    key: "4",
    testName: "Autonomy",
    percentage: 70,
  },
  {
    key: "5",
    testName: "Impact",
    percentage: 80,
  },
];
const ReportTable = () => {
  const {data : reports, error, loading} = useReportTestNameQuery()
console.log(reports)
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
  console.log(modalValue)
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
        <FaEye onClick={() =>handleModal(record)} className=" " size={20} />
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
