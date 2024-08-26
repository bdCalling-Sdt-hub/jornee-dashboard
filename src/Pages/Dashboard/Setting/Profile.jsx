import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { MdEdit } from "react-icons/md";
import { useGetUserInfoQuery,useUpdateUserInfoMutation } from "../../../redux/api/userApi";
import axios from "axios";
import Swal from "sweetalert2";
const Profile = () => {
  const [form] = Form.useForm(); // Create a form instance
  const { data: userInfo, isError, isLoading } = useGetUserInfoQuery();
  const [updateUser] = useUpdateUserInfoMutation()
  const [image, setImage] = useState(
    "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"
  );
  const [imgURL, setImgURL] = useState(image);
// console.log(userInfo?.data?.profile_image)
  useEffect(() => {
    if (userInfo?.data) {
      form.setFieldsValue({
        userName: userInfo?.data?.name,
        email: userInfo?.data?.email
      });
      if (userInfo.data.profile_image) {
        const baseUrl = 'http://192.168.10.239:5001/'
        const imageUrl = `${baseUrl}${userInfo?.data?.profile_image}`
        setImgURL(imageUrl);
      }
    }
  }, [userInfo, form]);

  const handleSubmit = (values) => {
    const id = userInfo?.data?._id;
    const formData = new FormData();
    
    // Append form data
    formData.append("name", values?.userName);
    formData.append("profile_image", image);
  
    // // Debugging: log the form data content
    // console.log('Form Data Content:');
    // console.log('name:', formData.get('name'));
  
    // const file = formData.get('profile_image');
    // if (file) {
    //   console.log('profile_image file details:');
    //   console.log('File Name:', file.name);
    //   console.log('File Type:', file.type);
    //   console.log('File Size:', file.size);
    // }
  
    axios.patch(`http://192.168.10.239:5001/auth/admin/edit-profile/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
      }
    })
    .then((res) => {
      console.log('Response:', res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile updated successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((err) => {
      console.error('Error:', err.response);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error updating profile!",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };
  

  const onChange = (e) => {
    const file = e?.target?.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file);
  };

  return (
    <div className="h-[53vh]">
      <div className="grid grid-cols-3 gap-5 py-10">
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
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                position: "relative",
              }}
            >
              <MdEdit
                size={25}
                className="bg-[#7D4C48] rounded-full p-1 absolute bottom-10 right-0"
                color="white"
              />
            </div>
          </label>
        </div>

        {/* forms */}
        <div className="col-span-2 pe-20">
          <Form
            form={form} // Bind the form instance
            name="profile_form"
            className="login-form"
            style={{ width: "100%", height: "fit-content" }}
            onFinish={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-x-16 w-full gap-y-4 pt-5">
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor="userName"
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
                    readOnly
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
