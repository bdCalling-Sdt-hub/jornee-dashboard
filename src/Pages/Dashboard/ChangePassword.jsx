import React, { useState } from "react";
// import BackButton from "../../Pages/Dashboard/BackButton";
import { Button, Form, Input } from "antd";

const ChangePassword = () => {
  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [curPassError, setCurPassError] = useState("");

  const handleChangePassword = (values) => {
    console.log(values);
    if (values?.current_password === values.new_password) {
      setNewPassError("The New password is semilar with old Password");
    } else {
      setNewPassError("");
    }

    if (values?.new_password !== values.confirm_password) {
      setConPassError("New Password and Confirm Password Doesn't Matched");
    } else {
      setConPassError("");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="h-[53vh]">
      <div style={{}}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{
            width: "100%",
            height: "fit-content",
            marginLeft: "50px",
            paddingRight: "30px",
            marginTop: "30px",
          }}
          onFinish={handleChangePassword}
        >
          <div style={{ marginBottom: "20px", width: "50%" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Current Password
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="current_password"
              rules={[
                {
                  required: true,
                  message: "Please input your current password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                type="password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
            {curPassError && (
              <label style={{ display: "block", color: "red" }} htmlFor="error">
                {curPassError}
              </label>
            )}
          </div>

          <div style={{ marginBottom: "20px", width: "50%" }}>
            <label style={{ display: "block", marginBottom: "5px" }} htmlFor="">
              New Password
            </label>
            <Form.Item
              name="new_password"
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
            {newPassError && (
              <label style={{ display: "block", color: "red" }} htmlFor="error">
                {newPassError}
              </label>
            )}
          </div>

          <div style={{ marginBottom: "40px", width: "50%" }}>
            <label
              style={{ display: "block", marginBottom: "5px" }}
              htmlFor="email"
            >
              Re-Type Password
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your Re-type Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
            {conPassError && (
              <label style={{ display: "block", color: "red" }} htmlFor="error">
                {conPassError}
              </label>
            )}
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "16px",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "100%", position: "relative" }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    border: "none",
                    height: "41px",
                    background: "#7D4C48",
                    color: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "150px",
                    position: "absolute",
                    right: "20px",
                    bottom: "0px",
                  }}
                >
                  Save
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
