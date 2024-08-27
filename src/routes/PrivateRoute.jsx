import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetUserInfoQuery } from "../redux/api/userApi";
import { Skeleton } from "antd";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { data: userInfo, isError, isLoading } = useGetUserInfoQuery();

  if (isLoading) {
    return <div className="flex items-center justify-center"><Skeleton active /></div>;
  }

  if (isError || !userInfo?.data?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
