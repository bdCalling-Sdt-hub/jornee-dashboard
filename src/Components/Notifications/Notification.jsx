import { Button, Form, Input } from "antd";
import React from "react";

const Notification = () => {
  return (
    <div>
      <Form className="w-1/3 mb-4">
        <h1 className="text-lg font-semibold py-2">Test Reminders</h1>
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

      <Form className="w-1/3 mb-4">
        <h1 className="text-lg font-semibold py-2">Reflections Reminders</h1>
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

      <Form className="w-1/3 ">
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
