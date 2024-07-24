import { Form, Input, Modal, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import BackButton from "./BackButton";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditSubscriptionModal from "../../Components/EditSubscriptionModal";
import AddUserModal from "../../Components/AddUserModal";
const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
  },
];

const subscriptionData = [
  {
    key: 1,
    packageName: "Per Month",
    price: "250$",
  },
  {
    key: 2,
    packageName: "Per Year",
    price: "400$",
  },
  {
    key: 3,
    packageName: "Per Week",
    price: "150$",
  },
];

const SubscriptMangement = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [reFresh, setReFresh] = useState("");
  const [editData, setEditData] = useState();

  console.log(editData);

  if (reFresh) {
    setTimeout(() => {
      setReFresh("");
    }, 1500);
  }

  const handleEditData = (value) => {
    console.log(value);
    setEditData(value);
    setOpenAddModel(true);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <RiDeleteBinLine className="mx-auto text-red-600" size={20} />
      ),
    },
  ];

  // subscription column
  const subscriptionColumns = [
    { title: "S.No", dataIndex: "key", key: "key" },
    { title: "Package Name", dataIndex: "packageName", key: "packageName" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => (
        <FaEdit className="mx-auto" onClick={() => handleEditData(record)} />
      ),
    },
  ];

  return (
    <div>
      <div style={{ margin: "24px 0" }}>
        <BackButton link="/" />
      </div>

      <div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#2F2F2F",
            padding: "10px",
          }}
        >
          Edit Subscription Plan
        </h1>

        <Table
          columns={subscriptionColumns}
          dataSource={subscriptionData}
          pagination={false}
        />
      </div>

      <div className=" mt-[100px]">
        <div className="flex items-center justify-between py-3">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#2F2F2F",
              padding: "10px",
            }}
          >
            Add Subscription Free User
          </h1>
          <Button
            onClick={() => setOpenModal(true)}
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "45px",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "100%",
              outline: "none",
              textAlign: "center",
              justifyItems: "center",
            }}
            className="text-2xl shadow-lg text-center"
          >
            +
          </Button>
        </div>

        <Table columns={columns} dataSource={data} pagination={false} />
      </div>

      <EditSubscriptionModal
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel}
        editData={editData}
      />

      <AddUserModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default SubscriptMangement;
