import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { Button, Modal, Table } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { useAllUsersQuery } from "../../redux/api/dashboardApi";

// const UserData = [
//   {
//     key: "1",
//     name: "Tushar",
//     email: "tushar@gmail.com",
//     status: "active",
//     joinDate: "15 july 2024",
//   }
// ];




const UserManagement = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const { data, error, isLoading } = useAllUsersQuery({
    page: pagination.current,
    limit: pagination.pageSize,
  })
  console.log(data)

  const formattedData = data?.data?.data?.map((user, i) => (
    {
      key: i + 1,
      name: user?.role,
      email: user?.email ? user?.email : user?.appId,
      status: user?.isActive ? "Active" : "Deactivate",
      joinDate: user?.createdAt

    }
  ))

  const components = {
    header: {
      cell: (props) => (
        <th {...props} style={{ backgroundColor: '#FFFFFF' }}>
          {props.children}
        </th>
      ),
    },
  };


  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const [modalData, setModalData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (value) => {
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
      render: (_, record) => (
        <IoEyeOutline size={20} className="" onClick={() => showModal(record)} />
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, current: page }));
  };

  return (
    <div className="bg-[#F1F2F6] mt-5">
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
          User List
        </h1>

        <div className="custom-pagination">
          <Table
            components={components}
            columns={UserColumns}
            dataSource={formattedData}
            className="text-center"
            pagination={{
              // pageSize: 10,
              // defaultCurrent: parseInt(page),
              current: pagination.current,
              pageSize: pagination.pageSize,
              onChange: handlePageChange,
              total: data?.data?.meta?.total || 0,
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
            <p className=" w-1/2"> {modalData?.joinDate?.split('T')[0]}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserManagement;
