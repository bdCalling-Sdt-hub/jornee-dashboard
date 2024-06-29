import { Modal } from "antd";
import React from "react";
import testLogo from "../assets/SafetyLogo.png";

const ViewTestReportModal = ({ viewTestModal, setViewTestModal }) => {
  const handleCancel = () => {
    setViewTestModal(false);
  };
  return (
    <Modal centered open={viewTestModal} onCancel={handleCancel} footer={false}>
      <div className="mt-10">
        <div className=" flex justify-between  text-lg mb-6 px-3 ">
          <p className=" font-semibold"> Test Given Time </p>
          <p className=" text-[#666666]"> 09:14 AM</p>
        </div>
        <div className="flex justify-center items-center">
          <div className=" border border-gray-500 ps-6 pe-3 pb-3 rounded-2xl w-[90%] ">
            <div className="flex text-lg gap-3 pt-4 pb-2">
              <img src={testLogo} alt="" width={25} />
              <h1 className=" text-[#15314A] text-lg font-semibold">safety</h1>
            </div>
            <p className="text-[#377FC0] text-lg font-semibold w-full pb-2 leading-6">
              {" "}
              likely going unmet
            </p>
            <p className="text-lg ">
              {" "}
              Your needs for connection might be going unmet. You may often feel
              a profound sense of loneliness and disconnection, despite being
              surrounded by people. Despite your efforts to form meaningful
              relationships, you struggle to establish deep connections with
              others, leaving you feeling isolated and misunderstood. You might
              experience fear of rejection, which may lead you to keep your
              guard up, making it difficult for others to get close to you.{" "}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewTestReportModal;
