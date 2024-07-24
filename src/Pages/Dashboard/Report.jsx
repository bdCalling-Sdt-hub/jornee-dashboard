import React from "react";
import ReportTable from "../../Components/Report/ReportTable";
import EmotionsLogged from "../../Components/Report/EmotionsLogged";

const Report = () => {
  return (
    <div className="py-5">
      <h1
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#2F2F2F",
          padding: "10px",
        }}
      >
        {" "}
        Report{" "}
      </h1>
      <ReportTable />

      <h1
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#2F2F2F",
          paddingTop: "30px",
        }}
      >
        {" "}
        Emotions Logged{" "}
      </h1>
      <EmotionsLogged />
    </div>
  );
};

export default Report;
