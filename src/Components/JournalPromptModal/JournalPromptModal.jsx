import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import { useCreateJournalPromptMutation } from '../../redux/api/dashboardApi';
import Swal from 'sweetalert2';

const JournalPromptModal = ({ setAddJournalModal, addJournalModal, id }) => {
    const [createJournalPrompt] = useCreateJournalPromptMutation()

    const [form] = Form.useForm();

    // console.log(id)

    const onFinish = (value) => {

        const question = {
            test: id?.id,
            item: value?.item
        }
        createJournalPrompt(question).unwrap()
            .then((payload) => Swal.fire({
                position: "top-center",
                icon: "success",
                title: payload?.message,
                showConfirmButton: false,
                timer: 1500
            }))
            .catch((error) => Swal.fire({
                position: "top-center",
                icon: "error",
                title: "This question already created",
                showConfirmButton: false,
                timer: 1500
            }));
        form.resetFields();
        setAddJournalModal(false)

    }
    return (
        <div>
            <Modal
                centered
                open={addJournalModal}
                onCancel={() => setAddJournalModal(false)}
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
                                Add Journaling Prompt
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
    )
}

export default JournalPromptModal