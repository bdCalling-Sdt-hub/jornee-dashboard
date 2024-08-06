import React, { useState } from "react";
import BackButton from "../BackButton";
import { Form, Input, Button } from "antd";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import Swal from "sweetalert2";

const Profile = () => {
  const [image, setImage] = useState(
    "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"
  );
  const [imgURL, setImgURL] = useState(image);
  const handleSubmit = (values) => {
    console.log(values);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleReset = () => {
    window.location.reload();
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file);
  };
  const initialFormValues = {
    name: "Daniel Navaes",
    email: "danielnavaes@gmail.com",
    mobile_number: "01756953936",
  };

  return (
    <div className="h-[53vh]">
      <div className=" grid grid-cols-3 gap-5 py-10">
        {/* image   */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "38px",
          }}
        >
          <input
            onChange={onChange}
            type="file"
            name=""
            id="img"
            style={{ display: "none" }}
          />
          <label
            htmlFor="img"
            style={{
              width: "200px",
              cursor: "pointer",
              height: "200px",
              borderRadius: "100%",
              background: "white",
              backgroundImage: `url(${imgURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                // background: "rgba(0, 0, 0, 0.4)",
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                position : "relative"
              }}
            >
              <MdEdit size={25} className="bg-[#7D4C48] rounded-full p-1 absolute bottom-10 right-0" color="white " />
            </div>
          </label>
        </div>

        {/* forms  */}
        <div className="col-span-2  pe-20 ">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
            style={{ width: "100%", height: "fit-content" }}
            onFinish={handleSubmit}
          >
            <div className=" grid grid-cols-2 gap-x-16 w-full gap-y-4 pt-5">
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Your Name
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="name">
                  <Input
                    placeholder="Enter Your  Name"
                    type="text"
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

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor=""
                >
                  User Name
                </label>
                <Form.Item name="userName" style={{ marginBottom: 0 }}>
                  <Input
                    type="text"
                    placeholder="Enter User Name"
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

              <div style={{ marginBottom: "40px" }}>
                <label style={{ marginBottom: "5px" }} htmlFor="email">
                  Email
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="email">
                  <Input
                    type="text"
                    placeholder="Enter Your Email"
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

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor=""
                >
                  Password
                </label>
                <Form.Item name="password" style={{ marginBottom: 0 }}>
                  <Input.Password
                    type="password"
                    placeholder="Enter Your Password"
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
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "16px",
                alignItems: "center",
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
                      right: "0px",
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
    </div>
  );
};

export default Profile;
