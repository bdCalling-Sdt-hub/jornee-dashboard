import { Button, Form, Input, Modal } from 'antd';
import React from 'react';

const QuestionModal = ({openQuesModal , setOpenQuesModal }) => {
    return (
        <div>
            <Modal
        centered
        open={openQuesModal}
        onCancel={() => setOpenQuesModal(false)}
        width={500}
        footer={false}
      >
        <div className="mt-10">
          <Form
            name="normal_login"
          
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
              Add Question
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="name">
                <Input
                  type="text" 
                  placeholder='Enter Question Name'
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

export default QuestionModal;