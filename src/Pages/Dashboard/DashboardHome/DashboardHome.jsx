import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";

import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserGroup, FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import { RxCountdownTimer } from "react-icons/rx";
import { Link } from "react-router-dom";
import trendingImage from "../../../assets/trendingUp.png";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiNotebookThin } from "react-icons/pi";
function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total User",
      total: "22,065",
      icon: <FaUserGroup color="#8280FF" size={32} />,
      bgColor: "#E4E4FF",
    },
    {
      name: "Total Test Token",
      total: "32,307",
      icon: <LuBox color="#FEC53D" size={32} />,
    
      bgColor: "#FEF2D6",
    },
    {
      name: "Total Subscription",
      total: "12,000",
      icon: <CiBookmarkPlus  color="#4AD991" size={32} />,
      
      bgColor: "#D9F7E7",
    },
    {
      name: "Total Earning",
      total: "1000",
    
      icon: <RxCountdownTimer color="#FF9066" size={32} />,
      bgColor: "#FFDED2",
    },
    {
      name: "Test Token Today",
      total: "320",
      icon: <PiNotebookThin color="#5DD1D9" size={32} />,
     
      bgColor: "#D6F7FE",
    },
    {
      name: "New Subscription",
      total: "120",
      icon:  <CiBookmarkPlus  color="#9920D2" size={32} />,
     
      bgColor: "#EDD9F7",
    },
    {
      name: "Today Earning",
      total: "1000",
      
      icon: <RxCountdownTimer color="#F55011" size={32} />,
      bgColor: "#EFD2D4",
    }, 
    {
      name: "Total Monthly Earning",
      total: "22,065",
      icon: <RxCountdownTimer color="#1890FF" size={32} />,
    
      bgColor: "#E2F7FC",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="pb-6 text-3xl font-semibold">Overview</h1>
      <div className=" grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4   gap-7  ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="bg-white p-4 h-[100%]  rounded-lg">
              <div className=" flex justify-between  items-center leading-loose">
                <div className="leading-loose ">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#6A6D7C",
                    }}
                  >
                    {item?.name}
                  </p>

                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    {item?.total}
                  </p>
                </div>
                <div
                  style={{
                    background: `${item.bgColor}`,
                    width: "64px",
                    height: "64px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item?.icon}
                </div>
              </div>

             
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          borderRadius: "15px",
          padding: "20px",
          backgroundColor: "#fff",
          marginTop: "30px",
        }}
        className="w-full"
      >
        <DailyOverviewChart />
      </div>
    </div>
  );
}

export default DashboardHome;
