import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import { useUpdateJournalPromptMutation } from '../redux/api/dashboardApi';
import Swal from 'sweetalert2';

const PromptsModal = ({ openPrompts, setOpenPrompts, setUpdatePromptQuestion, updatePromptQuestion }) => {
  const [form] = Form.useForm();
  const [updateJournalPrompt] = useUpdateJournalPromptMutation()


  useEffect(() => {
    if (updatePromptQuestion) {
      form.setFieldsValue({
        item: updatePromptQuestion?.PromptsName,
      });
    }
  }, [updatePromptQuestion, form])



  const onFinish = (value) => {
    const id = updatePromptQuestion?.id;
    const data = {
      item: value?.item
    }
    updateJournalPrompt({ id, data }).unwrap()
      .then((payload) => 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: payload?.message,
        showConfirmButton: false,
        timer: 1500
      }))
      .catch((error) => console.error('rejected', error));
    setOpenPrompts(false)

  }
  return (
    <div>
      <div>
        <Modal
          centered
          open={openPrompts}
          onCancel={() => setOpenPrompts(false)}
          width={500}
          footer={false}
        >
          <div className="mt-10">
            <Form
              name="normal_login"
              form={form}
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
                  Add Journaling Prompts
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="item">
                  <Input
                    type="text"
                    placeholder='Enter Journaling Prompts '
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
    </div>
  );
};

export default PromptsModal;