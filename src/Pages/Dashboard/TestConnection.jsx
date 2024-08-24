import { Button, Table } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import QuestionModal from "../../Components/QuestionModal";
import PromptsModal from "../../Components/PromptsModal";
import { useParams } from "react-router-dom";
import { useDeleteTestQuestionMutation, useTestQuestionQuery } from "../../redux/api/dashboardApi";
import Swal from "sweetalert2";

const JournalingData = [
  {
    key: "1",
    PromptsName: "feel supported and understood by those closest to me.",
  },
  {
    key: "2",
    PromptsName:
      "I am comfortable being vulnerable and sharing my true self with the ones I trust.",
  },
  {
    key: "3",
    PromptsName:
      "I experience a sense of belonging and acceptance in my community and social groups.",
  },
  {
    key: "4",
    PromptsName: "I feel respected in my social groups and relationships.",
  },
  {
    key: "5",
    PromptsName:
      "I feel considered and included enough in social plans and activities.",
  },
];

const TestConnection = () => {
  const [openQuesModal, setOpenQuesModal] = useState(false);
  const [openPrompts, setOpenPrompts] = useState(false);
  const id = useParams()
  // console.log(id)
  const {data:getAllTestQuestion, isError, isLoading} =  useTestQuestionQuery(id?.id);
  const [deleteTestQuestion] = useDeleteTestQuestionMutation()

  const formattedQuestionData = getAllTestQuestion?.data?.map((question, i)=>({
    key : i+1,
    id  : question?._id,
    QuestionName : question?.item
  }))


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
        <div className="mx-auto flex items-center ">
          <CiEdit
            onClick={() => handleEditQuestion(record)}
            className=""
            size={20}
          />
          <RiDeleteBinLine className="mx-auto text-red-600 cursor-pointer" onClick={()=>handleDeleteQuestion(record)} size={20} />
        </div>
      ),
    },
  ];

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
          <CiEdit onClick={() => setOpenPrompts(true)} className="" size={20} />
          <RiDeleteBinLine className="mx-auto text-red-600" size={20} />
        </div>
      ),
    },
  ];

  const handleEditQuestion =(value)=>{
    setOpenQuesModal(true)
    console.log(value)
  }


  // Delete test question function
  const handleDeleteQuestion = (value)=>{
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
            onClick={() => setOpenPrompts(true)}
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
          dataSource={JournalingData}
          pagination={false}
        />
      </div>

      <QuestionModal
        id={id}
        openQuesModal={openQuesModal}
        setOpenQuesModal={setOpenQuesModal}
      />
      <PromptsModal openPrompts={openPrompts} setOpenPrompts={setOpenPrompts} />
    </div>
  );
};

export default TestConnection;
