import { Progress, Table } from "antd";
import React from "react";
const data = [
  {
    key: "1",
    optionName: "Joy",
    percentage: 30,
    color: "#EBAB04",
  },
  {
    key: "2",
    optionName: "Trust",
    percentage: 40,
    color: "#E0690E",
  },
  {
    key: "3",
    optionName: "Anger",
    percentage: 50,
    color: "#A4341B",
  },
  {
    key: "4",
    optionName: "Fear",
    percentage: 30,
    color: "#7D933E",
  },
];
const EmotionTable = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Option name",
      dataIndex: "optionName",
      key: "optionName",
      render: (optionName, record) => (
        <p
          style={{
            color: record?.color,
          }}
        >
          {" "}
          {optionName}{" "}
        </p>
      ),
    },

    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      render: (percentage, record) => (
        <div className=" mx-auto w-3/4">
          <Progress
            percent={percentage}
            size="small"
            strokeColor={record?.color}
            format={(percent) => (
              <span style={{ color: record?.color, fontWeight: 700 }}>
                {percent}%
              </span>
            )}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default EmotionTable;
