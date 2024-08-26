import { Col, Row } from "antd";
import React, { useState } from "react";
import "./DashboardHome.css";
import DailyOverviewChart from "./DailyOverviewChart";
import { FaUserGroup } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { RxCountdownTimer } from "react-icons/rx";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiNotebookThin } from "react-icons/pi";
import { useEarningAnalyticsQuery, useOverViewQuery } from "../../../redux/api/dashboardApi";
function DashboardHome() {

  const {data : overView, error, isLoading} = useOverViewQuery();
  const [year, setYear] = useState('2024')
  const {data  : earning, error: earningError, isLoading :  earningLoading} = useEarningAnalyticsQuery(year)
 
  //** user overview data */
  const data = [
    {
      name: "Total User",
      total: overView?.data?.users,
      icon: <FaUserGroup color="#8280FF" size={32} />,
      bgColor: "#E4E4FF",
    },
    {
      name: "Total Test Token",
      total: overView?.data?.totalTest,
      icon: <LuBox color="#FEC53D" size={32} />,
    
      bgColor: "#FEF2D6",
    },
    {
      name: "Total Subscription",
      total: overView?.data?.totalSubscriptions,
      icon: <CiBookmarkPlus  color="#4AD991" size={32} />,
      
      bgColor: "#D9F7E7",
    },
    {
      name: "Total Earning",
      total: overView?.data?.totalEarnings,
    
      icon: <RxCountdownTimer color="#FF9066" size={32} />,
      bgColor: "#FFDED2",
    },
    {
      name: "Test Token Today",
      total: overView?.data?.todaysTestCount,
      icon: <PiNotebookThin color="#5DD1D9" size={32} />,
     
      bgColor: "#D6F7FE",
    },
    {
      name: "New Subscription",
      total: overView?.data?.newSubscribers,
      icon:  <CiBookmarkPlus  color="#9920D2" size={32} />,
     
      bgColor: "#EDD9F7",
    },
    {
      name: "Today Earning",
      total: overView?.data?.todaysEarning,
      
      icon: <RxCountdownTimer color="#F55011" size={32} />,
      bgColor: "#EFD2D4",
    }, 
    {
      name: "Total Monthly Earning",
      total: overView?.data?.totalMonthlyIncome,
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
        <DailyOverviewChart year={year} setYear={setYear} earning={earning} />
      </div>
    </div>
  );
}

export default DashboardHome;
