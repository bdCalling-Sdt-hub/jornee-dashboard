import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import { useUpdateSubscriptionPlanMutation } from '../redux/api/dashboardApi';

const EditSubscriptionModal = ({ openAddModel, setOpenAddModel, editData }) => {
  const [updateSubscriptionPlan] = useUpdateSubscriptionPlanMutation();

  const [form] = Form.useForm();
  // const handleSubmit = () => {
  //   form
  //     .validateFields() // Validate the form fields
  //     .then(values => {
  //       console.log(values)
  //       // const id = values?.id
  //       // console.log(values)
  //       // const updateData = {
  //       //   packageName: values?.packageName,
  //       //   price: values?.price
  //       // }
  //       // console.log(updateData)
  //       // updateSubscriptionPlan({ id, updateData })
  //       // setOpenAddModel(false);
  //     })
  //     .catch(errorInfo => {
  //       console.log('Form Validation Failed:', errorInfo);
  //     });
  // };

  const onFinish = (value) => {
    const id = editData?.id;
    const updateData = {
        packageName: value?.fullName,
        packagePrice: value?.price.toString()
    };
    updateSubscriptionPlan({ id, data: updateData });
    setOpenAddModel(false)
}
  return (
    <div>
      <Modal
        centered
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        width={500}
        footer={false}
      >
        <div className="mt-10">
          <Form
            name="normal_login"
            initialValues={{
              fullName: editData?.packageName,
              price: editData?.price,
            }}
            className="text-center"
            onFinish={onFinish}
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
                Package Names
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="fullName">
                <Input
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
                Package Price
              </label>
              <Form.Item name="price" style={{ marginBottom: 0 }}>
                <Input
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
                htmlType="Submit"
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
              // onClick={handleSubmit}
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

export default EditSubscriptionModal;