import { Dropdown, Menu, Space, Table } from "antd";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ResourcesViewModal from "../../Components/Resources/ResourcesViewModal";
import AddResourcesModal from "../../Components/Resources/AddResourcesModal";
import Swal from "sweetalert2";
const data = [
  {
    key: "1",
    testName: "Connection",
  },
  {
    key: "2",
    testName: "Safety",
  },
  {
    key: "3",
    testName: "Appreciation",
  },
  {
    key: "4",
    testName: "Autonomy",
  },
  {
    key: "5",
    testName: "Impact",
  },
];

const Resources = () => {
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  console.log(deleteId);
  const handleDelete = () => {
    if (deleteId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };
  const menu = (
    <Menu>
      <div className="bg-white z-30 w-[100px] px-3 py-2">
        <button
          className=" flex items-center gap-2 mb-1 "
          onClick={() => setViewModalOpen(true)}
        >
          {" "}
          <span className="text-[#1D75F2]">
            {" "}
            <FaEye />{" "}
          </span>{" "}
          <span> View</span>
        </button>

        <button
          className=" flex items-center gap-2 mb-1 "
          onClick={() => setAddModalOpen(true)}
        >
          {" "}
          <span className="text-[#7D4C48] text-lg font-semibold"> + </span>{" "}
          <span> Add pdf</span>
        </button>

        <button
          className=" flex items-center gap-2 mb-1 "
          onClick={() => handleDelete(deleteId)}
        >
          {" "}
          <span className="text-red-500">
            {" "}
            <MdDelete />{" "}
          </span>{" "}
          <span className=" "> Delete</span>
        </button>
      </div>
    </Menu>
  );

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Test Name",
      dataIndex: "testName",
      key: "testName",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Dropdown className=" bg-white" overlay={menu}>
          <Space>
            <BsThreeDotsVertical onClick={() => setDeleteId(record?.key)} />
          </Space>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="py-5">
      <h1
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#2F2F2F",
          padding: "10px",
        }}
      >
        {" "}
        Resources{" "}
      </h1>

      <Table columns={columns} dataSource={data} pagination={false} />
      <ResourcesViewModal
        viewModalOpen={viewModalOpen}
        setViewModalOpen={setViewModalOpen}
      />
      <AddResourcesModal
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
      />
    </div>
  );
};

export default Resources;
