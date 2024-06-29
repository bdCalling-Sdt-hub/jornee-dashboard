import { Form, Input, Modal, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import BackButton from "./BackButton";
import { FaEdit } from "react-icons/fa";
const data = [
  {
    key: "1",
    fullName: "per month",
    price: 120,
  },
  {
    key: "2",
    fullName: "per year ",
    price: 100,
  },
  {
    key: "3",
    fullName: "per week",
    price: 90,
  },
  {
    key: "4",
    fullName: "per day",
    price: 100,
  },
  {
    key: "5",
    fullName: "per month",
    price: 85,
  },
  {
    key: "6",
    fullName: "per week",
    price: 80,
  },
  {
    key: "7",
    fullName: "per year",
    price: 75,
  },
];

const MakeAdmin = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
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
      title: "Package Name",
      dataIndex: "fullName",
      key: "fullName",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
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

      <Table columns={columns} dataSource={data} pagination={false} />

      <Modal
        centered
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        width={500}
        footer={false}
      >
        <div className="mt-10">
          <Form
            name="normal_login"
            initialValues={{
              fullName: editData?.fullName,
              price: editData?.price,
            }}
            className="text-center"
          >
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  textAlign: "start",
                  color: "black",
                }}
                className="text-lg font-medium"
              >
                Package Name
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="fullName">
                <Input
                  type="text"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    color: "black",
                  }}
                />
              </Form.Item>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  textAlign: "start",
                  color: "black",
                }}
                className="text-lg font-medium"
              >
                Package Price
              </label>
              <Form.Item name="price" style={{ marginBottom: 0 }}>
                <Input
                  type="text"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    color: "black",
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item className="w-full mt-10">
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
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default MakeAdmin;
