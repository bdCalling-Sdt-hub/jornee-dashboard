import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import { useUploadPdfMutation } from "../../redux/api/resourceApi";
import axios from "axios";

const AddResourcesModal = ({ addModalOpen, setAddModalOpen, onUpload, uploadId }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [uploadPdf] = useUploadPdfMutation()
  // Handle form submission
  const handleSubmit = (values) => {

    const formData = new FormData();

    formData.append("test", uploadId);
    formData.append("pdf", fileList);
    axios.post('http://192.168.10.239:5001/resource/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Optional, can be omitted
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // uploadPdf(formData).unwrap().then((res)=>console.log(res)).catch((err)=>console.log(err))
    // onUpload(formData);

    // setAddModalOpen(false);
    // form.resetFields();
    // setFileList([]);
  };

  // const handleFileChange = ({ fileList }) => {
  //   console.log(fileList)
  //   // setFileList(fileList.map(file => file.originFileObj || file));
  //   setFileList(fileList);
  // };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile)
    setFileList(selectedFile);
    // if (selectedFile) {
    //   if (selectedFile.type !== 'application/pdf') {
    //     setError('Please select a PDF file.');
    //     setFile(null);
    //   } else {
    //     setError('');
    //     setFile(selectedFile);
    //   }
    // }
  };

  return (
    <Modal
      open={addModalOpen}
      onCancel={() => setAddModalOpen(false)}
      footer={null}
    >
      <h1 className="text-medium text-lg py-3">Add PDF</h1>
      <Form
        form={form}
        onFinish={handleSubmit}
      >

        {/* <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList}
          rules={[{ required: true, message: "Please upload a PDF file!" }]}
        > */}
        {/* <Upload
            beforeUpload={(file) => {
              // Restrict file type to PDF
              if (file.type !== 'application/pdf') {
                message.error('You can only upload PDF files!');
                return Upload.LIST_IGNORE;
              }
              return false; // Prevent automatic upload
            }}
            onChange={handleFileChange}
            fileList={fileList.map(file => ({ ...file, name: file.name }))}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload> */}
        <input
          type="file"
          id="pdfFile"
          onChange={handleFileChange}
          required
        />
        {/* </Form.Item> */}

        <Form.Item className="mt-5 text-center">
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
    </Modal>
  );
};

export default AddResourcesModal;
