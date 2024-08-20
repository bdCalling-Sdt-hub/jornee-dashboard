import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";



export default function DailyRentChart({earning}) {
  const [year, setYear] = useState("Jan");

  console.log(earning?.data)


  const data2 = earning?.data?.map(ear => {
    // console.log(ear)
    return ({
      name : ear?.month,
      pv : ear?.totalAmount
    })
  })
  console.log(data2)
  const data = [
    {
      name: "Jan",
      pv: 0,
    },
    {
      name: "Feb",
      pv: 0,
    },
    {
      name: "Mar",
      pv: 9800,
    },
    {
      name: "Apr",
      pv: 3908,
    },
    {
      name: "May",
      pv: 9800,
    },
    {
      name: "Jun",
      pv: 5800,
    },
    {
      name: "Jul",
      pv: 8300,
    },
    {
      name: "Aug",
      pv: 4300,
    },
    {
      name: "Sep",
      pv: 8300,
    },
    {
      name: "Oct",
      pv: 4800,
    },
    {
      name: "Nov",
      pv: 6900,
    },
    {
      name: "Dec",
      pv: 4300,
    },
  ];
 
  const items = [
    {
      label: "Jan",
      key: "Jan",
    },
    {
      label: "Feb",
      key: "Feb",
    },
    {
      label: "Mar",
      key: "Mar",
    },
    {
      label: "Apr",
      key: "Apr",
    },
    {
      label: "Apr",
      key: "Apr",
    },
    {
      label: "Apr",
      key: "Apr",
    },
    {
      label: "Apr",
      key: "Apr",
    },
  ];
  const onClick = ({ key }) => {
    setYear(key);
  };

  /* useEffect(() => {
    if(year !== 2024){
      window.history.pushState(null, "", `?year=${year}`);
    }
  }, [year]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearParam = searchParams.get('year');
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      setYear(parsedYear);
    } else {
      window.location.reload();
    }
  }, []); */

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
          paddingLeft: "10px",
          paddingRight: "5px",
        }}
      >
        <p
          style={{
            marginTop: "14px",
            fontSize: "22px",
            marginBottom: "14px",
            color: "black",
          }}
          className=" font-semibold"
        >
          Earning Details
        </p>
        <Dropdown menu={{ items, onClick }}>
          <p
            style={{
              // width: "79px",
              cursor: "pointer",
              color: "#717171",
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
            onClick={(e) => e.preventDefault()}
          >
            {year}
            <DownOutlined style={{ paddingLeft: "18px" }} color="#717171" />
          </p>
        </Dropdown>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={data2}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#7D4C48" fill="#d0daf0" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
