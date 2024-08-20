import { Form, Input, Modal, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import EditSubscriptionModal from "../../Components/EditSubscriptionModal";
import AddUserModal from "../../Components/AddUserModal";
import { CiEdit } from "react-icons/ci";
import { useSubscriptionPlanQuery } from "../../redux/api/dashboardApi";
const data = [
  {
    key: "1",
    email: "tushar@gmail.com",
  },
  {
    key: "2",
    email: "rahman@gmail.com",
  },
  {
    key: "3",
    email: "rafsan@gmail.com",
  }
];


const SubscriptMangement = () => {
  // Fetch Edit Subscription Plan Data 
  const { data: subscriptionPlans, error, isLoading } = useSubscriptionPlanQuery();
  // console.log(subscriptionPlans)


  const [openAddModel, setOpenAddModel] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [reFresh, setReFresh] = useState("");
  const [editData, setEditData] = useState();

  // console.log(subscriptionPlans)
  // Edit subscription plan formatted Data 
  const editSubscriptionPlanFormattedData = subscriptionPlans?.data?.map((plans, i) => ({
    id: plans?._id,
    key: i + 1,
    packageName: plans?.packageName,
    price: plans?.packagePrice

  }))


  if (reFresh) {
    setTimeout(() => {
      setReFresh("");
    }, 1500);
  }

  const handleEditData = (value) => {
   
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
      title: "Email or Id",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <RiDeleteBinLine className=" text-red-600 cursor-pointer" size={20} />
        </div>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CiEdit size={25} className="cursor-pointer " onClick={() => handleEditData(record)} />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5">


      <div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#2F2F2F",
            padding: "10px",
          }}
          className="mb-2"
        >
          Edit Subscription Plan
        </h1>

        <Table
          columns={subscriptionColumns}
          dataSource={editSubscriptionPlanFormattedData}
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

        </div>

        <Table columns={columns} dataSource={data} pagination={false} />
      </div>

      <EditSubscriptionModal
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel}
        editData={editData}
      />

      <AddUserModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="flex justify-end  py-5">
        <p
          onClick={() => setOpenModal(true)}
          type="primary"
          htmlType="submit"
          block
          style={{
            cursor: "pointer"
          }}
          className="text-2xl text-center"
        >
          <IoMdAddCircleOutline />
        </p>
      </div>
    </div>
  );
};

export default SubscriptMangement;
