import { Modal } from "antd";
import React from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
const ResourcesViewModal = ({ viewModalOpen, setViewModalOpen }) => {
  return (
    <div>
      <Modal
        open={viewModalOpen}
        onCancel={() => setViewModalOpen(false)}
        footer={false}
      >
        <div className=" my-4 mx-5">
          <div className=" flex  px-5 py-3 gap-4 border border-gray-400 rounded-lg m-5">
            <p>
              <IoDocumentAttachOutline size={20} />{" "}
            </p>
            <div>
              <p className=" font-medium pb-1">HannahBusing_Resume.pdf</p>
              <p className=" text-[#989692] pb-1">200 KB</p>
              <p className=" font-medium text-[#1DA1F2] "> Click to View </p>
            </div>
            <p className=" ms-6">
              {" "}
              <MdDeleteOutline size={20} />{" "}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResourcesViewModal;
