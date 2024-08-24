import { Dropdown, Menu, Space, Table } from "antd";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ResourcesViewModal from "../../Components/Resources/ResourcesViewModal";
import AddResourcesModal from "../../Components/Resources/AddResourcesModal";
import Swal from "sweetalert2";
import { useResourceTestNameQuery, useUploadPdfMutation } from "../../redux/api/resourceApi";

const Resources = () => {
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [uploadId, setUploadId] = useState('')
  const { data: resourceTest, isError, isLoading } = useResourceTestNameQuery()
  const [uploadPdf] = useUploadPdfMutation()

  const formattedData = resourceTest?.data?.map((item, i) => ({
    key: i + 1,
    id : item?._id,
    testName: item?.name
  }))

  const menu =(record)=> (
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
          onClick={() => handleUploadPdf(record)}
        >
          {" "}
          <span className="text-[#7D4C48] text-lg font-semibold"> + </span>{" "}
          <span> Add pdf</span>
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
        <Dropdown className=" bg-white" overlay={menu(record)}>
          <Space>
            <BsThreeDotsVertical />
          </Space>
        </Dropdown>
      ),
    },
  ];

  const handleUploadPdf = (value)=>{
    setAddModalOpen(true)
    setUploadId(value?.id)
    // console.log(value)
  }



  const handleUpload = (formData) => {
    console.log(formData.get('pdf'))
    uploadPdf(formData).unwrap()



  };

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
        Resource{" "}
      </h1>

      <Table columns={columns} dataSource={formattedData} pagination={false} />
      <ResourcesViewModal
        viewModalOpen={viewModalOpen}
        setViewModalOpen={setViewModalOpen}
      />
      <AddResourcesModal
        addModalOpen={addModalOpen}
        onUpload={handleUpload}
        setAddModalOpen={setAddModalOpen}
        uploadId={uploadId}
      />
    </div>
  );
};

export default Resources;
