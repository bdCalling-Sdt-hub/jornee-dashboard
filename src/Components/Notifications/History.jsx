import { Pagination, Table, Tabs } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import HistoryModal from "./HistoryModal";
import { useGetNotificationByTypeQuery } from "../../redux/api/dashboardApi";
import { AlignCenterOutlined, AlignLeftOutlined } from "@ant-design/icons";

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('testReminder');
  const [notificationMessage, setNotificationMessage] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10
  const { data: notification, error, isLoading } = useGetNotificationByTypeQuery({page: currentPage});
  
  // console.log(notification?.data?.meta?.total)


  const formattedNotification = notification?.data?.data?.map((note, i) => ({
    key: i + 1,
    title: note?.title,
    testName: note?.description
  }))
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
    setIsModalOpen(true)
    setNotificationMessage(value)
  }


  const handlePageChange = (page) => {
    setCurrentPage(page);
};

  const onChange = (key) => {
    if (key == 1) {
      setType('testReminder')
    } if (key == 2) {
      setType('reflectionReminder ')
    } if (key == 3) {
      setType('inspirational')
    }


  };
  // const items = [
  //   {
  //     key: "1",
  //     children: (
  //       <Table columns={columns} dataSource={formattedNotification}  />
  //     ),

  //   },
  // {
  //   key: "2",
  //   label: "Reflections Reminders",
  //   children: (
  //     <Table columns={columns} dataSource={formattedNotification} pagination={false} />
  //   ),
  // },
  // {
  //   key: "3",
  //   label: "Inspirational",
  //   children: (
  //     <Table columns={columns} dataSource={formattedNotification} pagination={false} />
  //   ),
  // },
  // ];



  return (
    <div>
      {/* <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} /> */}
      <Table columns={columns} dataSource={formattedNotification} pagination={false} />
      <div className="mt-5 flex items-center justify-center ">
        <Pagination current={currentPage}
          pageSize={pageSize}
          showSizeChanger={false}
          total={notification?.data?.meta?.total}
          onChange={handlePageChange} />
      </div>
      <HistoryModal notificationMessage={notificationMessage} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default History;
