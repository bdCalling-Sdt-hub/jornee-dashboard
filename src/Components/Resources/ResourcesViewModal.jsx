import { Modal } from "antd";
import React from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const ResourcesViewModal = ({ viewModalOpen, setViewModalOpen, pdf }) => {
  const baseURL = "https://server.jorneehq.com/";
  // Extract the filename from the path
  const pdfName = pdf?.split("/");
  const filename = pdfName?.pop();
  const fullURL = `${baseURL}${pdf}`;

  // Handle download functionality
  const handleDownload = () => {
    window.open(fullURL, "_blank");
  };

  return (
    <Modal
      open={viewModalOpen}
      onCancel={() => setViewModalOpen(false)}
      footer={null}
    >
      <div className="my-4 mx-5">
        <div className="flex px-5 py-3 gap-4 border border-gray-400 rounded-lg m-5">
          {filename ? (
            <div>
              <p>
                <IoDocumentAttachOutline size={20} />
              </p>
              <div>
                <p className="font-medium pb-1">{filename}</p>
                <p
                  className="font-medium text-[#1DA1F2] cursor-pointer"
                  onClick={handleDownload}
                >
                  Click to View
                </p>
              </div>
              <p className="ms-6"></p>
            </div>
          ) : (
            "No File Available"
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ResourcesViewModal;
