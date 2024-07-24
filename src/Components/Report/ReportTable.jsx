import { Modal, Progress, Table } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <FaEye
          onClick={() => setIsModalOpen(true)}
          className="mx-auto "
          size={20}
        />
      ),
    },
  ];

  return (
    <div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />

        {/* modal   */}

        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <h1 className="text-xl font-semibold py-4 ">Safety Result Report </h1>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Likely Unmet</p>
            <Progress percent={50} size="small" />
          </div>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Moderately Unmet</p>
            <Progress percent={60} size="small" />
          </div>

          <div className=" w-3/4 pb-3">
            <p className=" text-md">Well Unmet</p>
            <Progress percent={70} size="small" />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReportTable;
