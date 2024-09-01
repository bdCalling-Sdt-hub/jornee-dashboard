import { Button, Form, Modal } from "antd";
import React from "react";
import { useSendNotificationNewMutation } from "../../redux/api/notificationApi";
import Swal from "sweetalert2";

const HistoryModal = ({ isModalOpen, setIsModalOpen, notificationMessage }) => {
  const [form] = Form.useForm()
  const [sendNotification] = useSendNotificationNewMutation()
  const onFinish = () => {
    const data  = {
      title : notificationMessage?.title,
      description : notificationMessage?.testName
    }
    sendNotification(data).unwrap()
      .then((payload) => Swal.fire({
        position: "top-end",
        icon: "success",
        title: payload?.message,
        showConfirmButton: false,
        timer: 1500
      }))
      .catch((error) => Swal.fire({
        position: "top-end",
        icon: "error",
        title: error?.data?.message,
        showConfirmButton: false,
        timer: 1500
      }));
      setIsModalOpen(false) 
    form.resetFields()

  }
  return (
    <div className="mt-5">
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >

        <Form
          onFinish={onFinish}
        > 

          <p className="my-5 font-semibold text-xl">{notificationMessage?.title}</p>

          <Form.Item name="notificationMessage">
            <span className="">{notificationMessage?.testName}</span>
          </Form.Item>
          
          <Form.Item className="w-full mt-5">
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
              Resend
            </Button>
          </Form.Item>
        </Form>

      </Modal>
    </div>
  );
};

export default HistoryModal;
