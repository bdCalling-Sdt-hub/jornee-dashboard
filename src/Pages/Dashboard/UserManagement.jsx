import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { Button, Dropdown, Modal, Table } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { useAllUsersQuery } from "../../redux/api/dashboardApi";
import { FiFilter } from "react-icons/fi";




const UserManagement = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const [plan, setPlan] = useState('')

  // Fetch data from api
  const { data, error, isLoading } = useAllUsersQuery({
    page: pagination.current,
    limit: pagination.pageSize,
    subscription : plan
  })

  // Formatted data for show into the table 
  const formattedData = data?.data?.map((user, i) => (

    {
      key: i + 1,
      name: user?.role,
      email: user?.email ? user?.email : user?.appId,
      status: user?.isActive ? "Active" : "Deactivate",
      joinDate: user?.createdAt,
      subscription: user?.SubscriptionStatus === 'premium' ? <span className="text-[#4EAAFF]">{user?.SubscriptionStatus}</span> : <span className="text-[#FFBB0E]">{user?.SubscriptionStatus}</span>

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
  //  User table column
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
      title: "Subscription Status",
      dataIndex: "subscription",
      key: "subscription",
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
        <IoEyeOutline size={20} className="cursor-pointer" onClick={() => showModal(record)} />
      ),
    },
  ];

// Filter data options
  const items = [
    {
      key: '1',
      label: (

        <p onClick={() => setPlan('')} >All</p>
      ),
    },
    {
      key: '2',
      label: (
        <p onClick={() => setPlan('premium')} className="text-[#4EAAFF]">Premium</p>
      ),
    },
    {
      key: '3',
      label: (
        <p className="text-[#FFBB0E]" onClick={() => setPlan('free')}>Free</p>

      ),
    },
  ];

  return (
    <div className="bg-[#F1F2F6] mt-5">
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div className="flex justify-between items-center">
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

          <div className="flex gap-2 items-center mr-4">


            <Dropdown menu={{ items }} borderRadius placement="bottomRight">
              <Button className="border-none">
                <FiFilter className="cursor-pointer" size={25} />
              </Button>
            </Dropdown>
            <p className="font-semibold">Filter</p>
          </div>
        </div>

        <div className="custom-pagination">
          <Table
            components={components}
            columns={UserColumns}
            dataSource={formattedData}
            className="text-center"
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              onChange: (page) => setPagination({ ...pagination, current: page }),
              total: data?.data?.meta?.total,
              showSizeChanger: false,
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
