import { Button, Form, Input } from "antd";
import React from "react";
import { useSendNotificationMutation } from "../../redux/api/notificationApi";
import Swal from "sweetalert2";

const Notification = () => {
  const [sendNotification] = useSendNotificationMutation()
  const [form] = Form.useForm()
  const handleSendNotification = (value) => {
    const message = {
      type: "testReminder", ...value
    }
    sendNotification(message).unwrap()
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


  }
  const handleReflectionReminder = (value) => {
    const message = {
      type: "reflectionReminder", ...value
    }
    sendNotification(message).unwrap()
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
      form.resetFields()

  }
  const handleInspirational = (value) => {
    const message = {
      type: "inspirational", ...value
    }
    sendNotification(message).unwrap()
      .then((payload) => Swal.fire({
        position: "top-end",
        icon: "success",
        title: payload?.message,
        showConfirmButton: false,
        timer: 1500
      }))
      .catch((error) =>Swal.fire({
        position: "top-end",
        icon: "error",
        title: error?.data?.message,
        showConfirmButton: false,
        timer: 1500
      }));


  }
  return (
    <div>
      <Form form={form} className="w-1/3 mb-4" onFinish={handleSendNotification}>
        <h1 className="text-lg font-semibold py-2">Test Reminders</h1>
        <Form.Item name="description">
          <Input.TextArea rows={4} placeholder="Write here something ...." />
        </Form.Item>

        <Form.Item className=" mt-5 text-end ">
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "20%",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "8px",
              outline: "none",
            }}
          >
            Send
          </Button>
        </Form.Item>
      </Form>

      <Form className="w-1/3 mb-4" onFinish={handleReflectionReminder}>
        <h1 className="text-lg font-semibold py-2">Reflections Reminders</h1>
        <Form.Item name="description">
          <Input.TextArea rows={4} placeholder="Write here something ...." />
        </Form.Item>
        <Form.Item className=" mt-5 text-end ">
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "20%",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "8px",
              outline: "none",
            }}
          >
            Send
          </Button>
        </Form.Item>
      </Form>

      <Form className="w-1/3 " onFinish={handleInspirational}>
        <h1 className="text-lg font-semibold py-2">Inspirational</h1>
        <Form.Item name="reminder">
          <Input.TextArea rows={4} placeholder="Write here something ...." />
        </Form.Item>
        <Form.Item className=" mt-5 text-end ">
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "20%",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "8px",
              outline: "none",
            }}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Notification;
