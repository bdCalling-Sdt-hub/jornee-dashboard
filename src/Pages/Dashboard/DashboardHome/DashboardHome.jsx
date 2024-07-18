import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";

import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";

import { Link } from "react-router-dom";
import trendingImage from "../../../assets/trendingUp.png";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "New Seller",
      count: "22,065",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 8.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#E2F7FC",
    },
    {
      name: "Active Seller",
      count: "32,307",
      icon: <FaUserPlus color="#F98002" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 7.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#FFE3C7",
    },
    {
      name: "Total Seller",
      count: "12,000",
      icon: <LuBox color="#FEC53D" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 6.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#FFF3D6",
    },
    {
      name: "Total Profit",
      count: "1000",
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 8.5%</span> Up from
          yesterday
        </div>
      ),
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF",
    },
    {
      name: "Active Seller",
      count: "320",
      icon: <FaUserPlus color="#F98002" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 8.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#FFE3C7",
    },
    {
      name: "Total Seller",
      count: "120",
      icon: <LuBox color="#FEC53D" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 6.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#FFF3D6",
    },
    {
      name: "Total Profit",
      count: "1000",
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 5.5%</span> Up from
          yesterday
        </div>
      ),
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF",
    }, 
    {
      name: "Total Monthly Earning",
      count: "22,065",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      title2: (
        <div className="text-[#606060] text-lg">
          {" "}
          <span className="text-[#00B69B] font-semibold"> 8.5%</span> Up from
          yesterday
        </div>
      ),
      bgColor: "#E2F7FC",
    },
  ];

  return (
    <div className=" p-10">
      <h1 className="pb-6 text-3xl font-semibold">Overview</h1>
      <div className=" grid grid-cols-4 gap-7 ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="bg-white p-6 rounded-lg">
              <div className=" flex justify-between items-center leading-loose">
                <div className="leading-loose">
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#6A6D7C",
                    }}
                  >
                    {item.name}
                  </p>

                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    {item.count}
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

              <div className="flex gap-1 items-center">
                <img src={trendingImage} alt="" />
                <p>{item?.title2} </p>
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
