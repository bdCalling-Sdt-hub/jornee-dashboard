import { Button, Table } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import QuestionModal from "../../Components/QuestionModal";
import PromptsModal from "../../Components/PromptsModal";
import { useParams } from "react-router-dom";
import { useDeleteJournalQuestionMutation,  useDeleteTestQuestionMutation, useJournalPromptQuestionQuery, useTestQuestionQuery } from "../../redux/api/dashboardApi";
import Swal from "sweetalert2";
import UpdateQuestionModal from "../../Components/UpdateQuestionModal/UpdateQuestionModal";
import JournalPromptModal from "../../Components/JournalPromptModal/JournalPromptModal";



const TestConnection = () => {
  const [openQuesModal, setOpenQuesModal] = useState(false);
  const [openEditQuestionModal, setOpenEditQuestionModal] = useState(false);
  const [addJournalModal, setAddJournalModal] = useState(false)
  const [openPrompts, setOpenPrompts] = useState(false);
  const [updateQuestionName, setUpdateQuestionName] = useState("")
  const [updatePromptQuestion,setUpdatePromptQuestion] = useState('')
  const id = useParams()

  const { data: getAllTestQuestion, isError, isLoading } = useTestQuestionQuery(id?.id);
  const { data: journalPromptQuestion, promptError, promptLoading } = useJournalPromptQuestionQuery(id?.id);
  const [deleteTestQuestion] = useDeleteTestQuestionMutation()
  const [deletePromptQuestion] = useDeleteJournalQuestionMutation()

  // ============== test question table formatted data ====================/
  const formattedQuestionData = getAllTestQuestion?.data?.map((question, i) => ({
    key: i + 1,
    id: question?._id,
    QuestionName: question?.item
  }))



  /* journal prompt question formatted data */
  const formattedJournalPrompt = journalPromptQuestion?.data?.data?.map((prompts, i) => (
    {
      key: i + 1,
      id: prompts?._id,
      PromptsName: prompts?.item

    }
  ))


  /** question table column format */
  const QuestionColumns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Question Name",
      dataIndex: "QuestionName",
      key: "QuestionName",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className=" flex items-center ">
          <CiEdit
            onClick={() => handleEditQuestion(record)}
            className="cursor-pointer"
            size={20}
          />
          <RiDeleteBinLine className="mx-auto text-red-600 cursor-pointer" onClick={() => handleDeleteQuestion(record)} size={20} />
        </div>
      ),
    },
  ];


  /* Journal prompt column format */
  const JournalingColumns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Journaling Prompts name",
      dataIndex: "PromptsName",
      key: "PromptsName",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="mx-auto flex items-center ">
          <CiEdit onClick={() => handleEditJournalPrompt(record)} className="cursor-pointer" size={20} />
          <RiDeleteBinLine className="mx-auto text-red-600 cursor-pointer" onClick={() => handleDeletePrompt(record)} size={20} />
        </div>
      ),
    },
  ];

  /** Delete prompt question functionality */
  const handleDeletePrompt = (value) => {
    const id = value?.id
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D4C48",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        deletePromptQuestion(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your user been deleted.",
          icon: "success"
        });
      }
    });

  }

  /** Edit journal prompt question function */
  const handleEditJournalPrompt = (value) =>{
    setOpenPrompts(true)
    setUpdatePromptQuestion(value)
  }


  /** edit question functionality */
  const handleEditQuestion = (value) => {
    setOpenEditQuestionModal(true)
    setUpdateQuestionName(value)
  }


  // Delete test question function
  const handleDeleteQuestion = (value) => {
    const id = value?.id
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D4C48",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        deleteTestQuestion(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your user been deleted.",
          icon: "success"
        });
      }
    });



  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#7D4C48] text-center py-5">
        {" "}
        Connection{" "}
      </h1>

      <div>
        <div className=" flex justify-between items-center py-3 px-2">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#2F2F2F",
              padding: "10px",
            }}
          >
            Test Questions
          </h1>
          <Button
            onClick={() => setOpenQuesModal(true)}
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "45px",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "100%",
              outline: "none",
            }}
            className="text-2xl shadow-lg"
          >
            +
          </Button>
        </div>
        <Table
          columns={QuestionColumns}
          dataSource={formattedQuestionData}
          pagination={false}
        />
      </div>

      <div className="mt-[50px]">
        <div className=" flex justify-between items-center py-3 px-2">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#2F2F2F",
              padding: "10px",
            }}
          >
            Journaling Prompts
          </h1>
          <Button
            onClick={() => setAddJournalModal(true)}
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              width: "45px",
              height: "45px",
              background: "#7D4C48",
              color: "white",
              borderRadius: "100%",
              outline: "none",
            }}
            className="text-2xl shadow-lg"
          >
            +
          </Button>
        </div>
        <Table
          columns={JournalingColumns}
          dataSource={formattedJournalPrompt}
          pagination={false}
        />
      </div>

      <QuestionModal id={id} openQuesModal={openQuesModal} setOpenQuesModal={setOpenQuesModal} />
      <UpdateQuestionModal setOpenEditQuestionModal={setOpenEditQuestionModal} updateQuestionName={updateQuestionName} openEditQuestionModal={openEditQuestionModal} />
      <JournalPromptModal addJournalModal={addJournalModal} setAddJournalModal={setAddJournalModal} id={id} />
      <PromptsModal setUpdatePromptQuestion={setUpdatePromptQuestion} updatePromptQuestion={updatePromptQuestion}  openPrompts={openPrompts} setOpenPrompts={setOpenPrompts} />
    </div>
  );
};

export default TestConnection;
