import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import { BiCloudUpload } from "react-icons/bi";

const AddResourcesModal = ({ addModalOpen, setAddModalOpen, uploadId }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState(null);
  const [fileName, setFileName] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("test", uploadId);
    formData.append("pdf", fileList);
    
    axios.post('http://192.168.10.239:5001/resource/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
      }
    })
    .then((res) => Swal.fire({
      position: "top-end",
      icon: "success",
      title: "PDF Upload successfully!",
      showConfirmButton: false,
      timer: 1500
    }))
    .catch((err) => console.log(err));

    setAddModalOpen(false);
    form.resetFields();
    setFileName(""); // Reset the file name after submission
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileList(selectedFile);
    setFileName(selectedFile.name); // Set the file name to display
  };

  return (
    <Modal
      open={addModalOpen}
      onCancel={() => setAddModalOpen(false)}
      footer={null}
    >
      <h1 className="text-medium text-lg py-3">Add PDF</h1>
      <Form form={form} onFinish={handleSubmit}>
        <div className="flex flex-col items-center">
          
          <div className="relative w-full">
            <label
              htmlFor="pdfFile"
              className="flex items-center justify-center w-full h-10 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
             
              <BiCloudUpload size={25} />

              <span className="text-gray-500 ml-2">
                {fileName ? fileName : "Click to Upload"}
              </span>
            </label>
            <input
              type="file"
              id="pdfFile"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
          </div>
        </div>
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
