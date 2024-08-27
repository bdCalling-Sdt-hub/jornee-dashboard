import { Button, Dropdown, Form, Input, Menu, Modal, Space, Table, Tooltip } from 'antd';
import React, { useMemo, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAllTestQuery, useUpdateTestNameMutation } from '../../redux/api/dashboardApi';

const Test = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null);
  const { data: allTests, isError, isLoading } = useAllTestQuery();
  const [updateTestName] = useUpdateTestNameMutation()
  const [form] = Form.useForm();
  const formattedTestData = allTests?.data?.map((test, i) => ({
    key: i + 1,
    id: test?._id,
    testName: test?.name
  }))
console.log(allTests)
  const handleEditTest = (value) => {
    setShowModal(true)
    form.setFieldsValue({
      testName: value?.testName,
    });
    setSelectedRecord(value)


  }

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();  
    setSelectedRecord('');
  };

const handleEditTestName =(value) =>{
  const data = {
    name : value?.testName
  }
  const id = selectedRecord?.id
  updateTestName({id , data})
  setShowModal(false)
  
}

  const menu = (record) => (
    <Menu>
      <div className="bg-white z-30 w-[100px] px-3 py-2">
        <Link to= {`/test-connection/${record?.id}`} >
          <button className=" flex items-center gap-2 mb-1 ">
            {" "}
            <span className="text-[#1D75F2]">
              {" "}
              <FaEye />{" "}
            </span>{" "}
            <span> View</span>
          </button>
        </Link>


        <button className=" flex items-center gap-2 mb-1 " onClick={() => handleEditTest(record)}>
          {" "}
          <span className="text-[#f5523c]">
            {" "}
            <CiEdit />{" "}
          </span>{" "}
          <span> Edit</span>
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
  return (
    <div>
      <div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#2F2F2F",
            padding: "10px",
          }}
        >
          Edit Test
        </h1>

        <Table columns={columns} dataSource={formattedTestData} pagination={false} />
      </div>


      <Modal
        centered
        open={showModal}
         onCancel={handleCancel}
        width={500}
        footer={false}
      >
        <div className="mt-10">
          <Form
            name="normal_login"
            onFinish={handleEditTestName}
            form={form}
            initialValues={{
              testName: selectedRecord?.testName || '',
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
                Test Name
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="testName">
                <Input
                  type="text"
                  placeholder='Enter your Name'
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

export default Test;