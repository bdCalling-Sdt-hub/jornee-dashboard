import { Progress, Table } from "antd";
import { useReportEmotionsQuery } from "../../redux/api/dashboardApi";


const EmotionTable = () => {

  const  colorCodes = ['#EBAB04', "#E0690E","#A4341B", "#873058","#7D933E","#377FC0","#3145AE","#8137BB"];
  const {data  : reportEmotionData,error,isLoading} = useReportEmotionsQuery()
  const formattedData = reportEmotionData?.data?.map((item,i) => ({
    key : i+1, 
    optionName : item?.emotion,
    percentage : item?.percentage,
    color : colorCodes[i]
  }))

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
        <div className=" w-3/4">
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
      <Table columns={columns} dataSource={formattedData} pagination={false} />
    </div>
  );
};

export default EmotionTable;
