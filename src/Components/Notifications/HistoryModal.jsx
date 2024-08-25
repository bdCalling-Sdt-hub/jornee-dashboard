import { Modal } from "antd";
import React from "react";

const HistoryModal = ({ isModalOpen, setIsModalOpen,notificationMessage }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <div className=" px-5 py-10">
        {notificationMessage}
        </div>
      </Modal>
    </div>
  );
};

export default HistoryModal;
