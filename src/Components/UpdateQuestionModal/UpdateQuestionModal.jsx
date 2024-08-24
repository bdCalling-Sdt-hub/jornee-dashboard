import { Button, Form, Modal, Input } from 'antd';
import React, { useEffect } from 'react';
import { useUpdateTestQuestionMutation } from '../../redux/api/dashboardApi';

const UpdateQuestionModal = ({ setOpenEditQuestionModal, openEditQuestionModal, updateQuestionName }) => {
    const [form] = Form.useForm();
    const [updateTestQuestion] = useUpdateTestQuestionMutation()

    // Use useEffect to update the form fields when updateQuestionName changes
    useEffect(() => {
        if (updateQuestionName) {
            form.setFieldsValue({
                question: updateQuestionName?.QuestionName,
            });
        }
    }, [updateQuestionName, form]);
    const onFinish = (value) => {
        const id = updateQuestionName?.id
        const data = { question: value?.question };
        updateTestQuestion({ id, data })

        setOpenEditQuestionModal(false);
    };

    return (
        <div>
            <Modal
                centered
                open={openEditQuestionModal}
                onCancel={() => setOpenEditQuestionModal(false)}
                width={500}
                footer={false}
            >
                <div className="mt-10">
                    <Form
                        form={form}
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
                                Update Question
                            </label>
                            <Form.Item style={{ marginBottom: 0 }} name="question">
                                <Input
                                    type="text"
                                    placeholder="Enter Question Name"
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

export default UpdateQuestionModal;
