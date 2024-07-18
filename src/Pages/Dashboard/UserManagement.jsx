import React, { useState } from "react";
import BackButton from "./BackButton";

import { Button,  Modal,  Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
 

import ViewTestReportModal from "../../Components/ViewTestReportModal";
 



const UserData = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
    status: "active",
    joinDate: "17 july 2024",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "6",
    name: "Fahim",
    email: "fahim@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "8",
    name: "Tushar",
    email: "tushar@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "9",
    name: "Rahman",
    email: "rahman@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "10",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "11",
    name: "jusef",
    email: "jusef@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "12",
    name: "Asad",
    email: "asad@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "13",
    name: "Fahim",
    email: "fahim@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "14",
    name: "Nadir",
    email: "nadir@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "15",
    name: "Asad",
    email: "asad@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "16",
    name: "Fahim",
    email: "fahim@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
  {
    key: "17",
    name: "Nadir",
    email: "nadir@gmail.com",
    status: "active",
    joinDate: "15 july 2024",
  },
];

const UserManagement = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const [modalData, setModalData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewTestModal, setViewTestModal] = useState(false);

  const showModal = (value) => {
    console.log(value);
    setModalData(value);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
//  user column  
  const UserColumns = [
    {
      title: "User ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "username",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "View",
      dataIndex: "printView",
      key: "printView",
      render: (_, record) => <EyeOutlined onClick={() => showModal(record)} />,
    },
  ];  





  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }} className=" mt-5">
        <BackButton link="/" />
      </div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#2F2F2F",
            padding: "10px",
          }}
        >
          User Test Report
        </h1>

        <div>
          <Table
            columns={UserColumns}
            dataSource={UserData}
            className="text-center"
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
            }}
          />
        </div> 


      </div>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={550}
      >
        <div className="pt-14 ps-5">
          <div className=" flex     text-lg  w-full justify-between py-4 ">
            <p className="font-semibold w-1/2"> User ID</p>
            <p className=" w-1/2"> {modalData?.key}</p>
          </div>

          <div className=" flex    text-lg w-full justify-between pb-4  ">
            <p className="font-semibold w-1/2 "> User Name</p>
            <p className="w-1/2"> {modalData?.name}</p>
          </div>
          <div className=" flex     text-lg  w-full justify-between  pb-4 ">
            <p className="font-semibold w-1/2"> User Email</p>
            <p className="w-1/2"> {modalData?.email}</p>
          </div>
          <div className=" flex  w-full   text-lg pb-4">
            <p className="font-semibold w-1/2"> Subscription Status</p>
            <p className="w-1/2"> {modalData?.status}</p>
          </div>
          <div className=" flex  w-full   text-lg ">
            <p className="font-semibold w-1/2"> Join Date</p>
            <p className=" w-1/2"> {modalData?.joinDate}</p>
          </div>

          <div
            className="flex justify-center items-center mt-12 mb-6"
            onClick={() => setViewTestModal(true)}
          >
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                border: "none",
                width: "34%",
                height: "45px",
                background: "#7D4C48",
                color: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            >
              View Test Report
            </Button>
          </div>
        </div>
      </Modal>
      <ViewTestReportModal
        viewTestModal={viewTestModal}
        setViewTestModal={setViewTestModal}
      />
    </div>
  );
};

export default UserManagement;
