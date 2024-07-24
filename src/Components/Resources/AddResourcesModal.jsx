import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Upload } from "antd";
import React from "react";

const AddResourcesModal = ({ addModalOpen, setAddModalOpen }) => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div>
      <Modal
        open={addModalOpen}
        onCancel={() => setAddModalOpen(false)}
        footer={false}
      >
        <h1 className=" text-medium text-lg py-3 "> Add pdf</h1>
        <Form>
          <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item className=" mt-5 text-center ">
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
    </div>
  );
};

export default AddResourcesModal;
