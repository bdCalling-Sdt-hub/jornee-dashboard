import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useCreateFreeUserMutation } from '../redux/api/dashboardApi';
import Swal from 'sweetalert2';
const AddUserModal = ({ openModal, setOpenModal }) => {

  const [createFreeUser] = useCreateFreeUserMutation()
  const [errorMessage, setIsError] = useState()
  // const onFinish =(value)=>{
  //   const response = createFreeUser(value).unwrap()
  //   console.log(response)
  //   setOpenModal(false)
  //   // console.log(value)
  // }


  const onFinish =  (value) => {
    console.log(value)

      createFreeUser(value).unwrap()
      .then((payload) =>  Swal.fire({
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
      setOpenModal(false);

     
  };

  return (
    <div>
      <Modal
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        width={500}
        footer={false}
      >
        <div className="mt-10">
          <Form
            name="normal_login"
            onFinish={onFinish}
            className="text-center"
          >


            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  textAlign: "start",
                  color: "black",
                }}
                className="text-lg font-medium"
              >
                Email or Id
              </label>
              <Form.Item name="user" style={{ marginBottom: 0 }}>
                <Input
                  placeholder='Enter Your Email'
                  type="text"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    color: "black",
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item className="w-full mt-10">
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
        </div>
      </Modal>
    </div>
  );
};

export default AddUserModal;