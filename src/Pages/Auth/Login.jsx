import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import login from "../../assets/Login.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useGetUserMutation } from "../../redux/api/userApi";
import Swal from "sweetalert2";

const Login = () => {
  const [getUser, { data, isLoading, isSuccess, isError }] =
    useGetUserMutation();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await getUser({
        email: values.email,
        password: values.password,
      }).unwrap();
      if (response?.data?.accessToken) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response?.data?.accessToken)
        );
        navigate("/");
      } else {
        console.error("Login failed: No token received");
      }
    } catch (error) {
      console.error(
        Swal.fire({
          position: "center",
          icon: "error",
          title: error?.data?.message ?? "Failed to login",
          showConfirmButton: false,
          timer: 1500,
        })
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "550px",
          background: "white",
          borderRadius: "12px",
          padding: "60px 47px",
        }}
        onFinish={onFinish}
      >
        <h1
          className=" font-semibold"
          style={{ fontSize: "28px", textAlign: "center" }}
        >
          Login to Account
        </h1>
        <p className="text-center text-sm py-3">
          Please enter your email and password to continue
        </p>
        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            {" "}
            Email{" "}
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            Password
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "#6A6D7C" }}>Remember me</Checkbox>
          </Form.Item>
          <a
            className="login-form-forgot"
            style={{ color: "#6A6D7C" }}
            href="/forgot-password"
          >
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
            block
            style={{
              height: "52px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#A05C56",
              marginTop: "56px",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
