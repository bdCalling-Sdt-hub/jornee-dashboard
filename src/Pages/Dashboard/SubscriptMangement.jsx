import { Form, Input, Modal, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import EditSubscriptionModal from "../../Components/EditSubscriptionModal";
import AddUserModal from "../../Components/AddUserModal";
import { CiEdit } from "react-icons/ci";
import { useDeleteFreeUserMutation, useSubscriptionFreePlanQuery, useSubscriptionPlanQuery } from "../../redux/api/dashboardApi";
import Swal from "sweetalert2";
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
  const { data: freeSubscription, error: freeUserError, isLoading: freeUserLoading } = useSubscriptionFreePlanQuery()

  const [deleteFreePlanUser] = useDeleteFreeUserMutation()
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [reFresh, setReFresh] = useState("");
  const [editData, setEditData] = useState();

  const editSubscriptionPlanFormattedData = subscriptionPlans?.data?.map((plans, i) => ({
    id: plans?._id,
    key: i + 1,
    packageName: plans?.packageName,
    price: plans?.packagePrice

  }))

  // Free subscription Plan user formatted data
  const freeUserTable = freeSubscription?.data?.data?.map((users, i) => (
    {
      id: users?._id,
      key: i + 1,
      email: users?.user?.email ? users?.user?.email : users?.user?.appId

    }
  ))


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
          <RiDeleteBinLine className=" text-red-600 cursor-pointer" onClick={() => handleDeleteFreeUser(record)} size={20} />
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

  const handleDeleteFreeUser = (value) => {
    const id = value?.id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D4C48",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        deleteFreePlanUser(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your user been deleted.",
          icon: "success"
        });
      }
    });

  }

  return (
    <div className="mt-5">


      {/* <div>
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
      </div> */}

      <div className="">
        <div className="flex items-center justify-between py-3">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#2F2F2F",
              padding: "10px",
            }}
          >
            Add Subscription Free Users
          </h1>

        </div>

        <Table columns={columns} dataSource={freeUserTable} pagination={false} />
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
