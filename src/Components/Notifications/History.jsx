import { Table, Tabs } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import HistoryModal from "./HistoryModal";
import { useGetNotificationByTypeQuery } from "../../redux/api/dashboardApi";

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('testReminder');
  const [notificationMessage, setNotificationMessage] = useState('')
  const { data: notification, error, isLoading } = useGetNotificationByTypeQuery(type);


  const formattedNotification = notification?.data?.data?.map((note, i) => ({
    key: i + 1,
    testName: note?.description
  }))
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "",
      dataIndex: "testName",
      key: "testName",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center"><FaEye onClick={() => handleShowNotification(record)} className="cursor-pointer " size={20} /></div>
      ),
    },
  ];

  const handleShowNotification = (value) => {
    // console.log(value)
    setIsModalOpen(true)
    setNotificationMessage(value?.testName)
  }

  const onChange = (key) => {
    if (key == 1) {
      setType('testReminder')
    } if (key == 2) {
      setType('reflectionReminder ')
    } if (key == 3) {
      setType('inspirational')
    }


  };
  const items = [
    {
      key: "1",
      label: "Test Reminders",
      children: (
        <Table columns={columns} dataSource={formattedNotification} pagination={false} />
      ),
    },
    {
      key: "2",
      label: "Reflections Reminders",
      children: (
        <Table columns={columns} dataSource={formattedNotification} pagination={false} />
      ),
    },
    {
      key: "3",
      label: "Inspirational",
      children: (
        <Table columns={columns} dataSource={formattedNotification} pagination={false} />
      ),
    },
  ];



  return (
    <div>
      <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
      <HistoryModal notificationMessage={notificationMessage} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default History;
