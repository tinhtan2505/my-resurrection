import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../auth/lib/api-service";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />; // Chuyển hướng đến trang login nếu chưa đăng nhập
  }
  return children;
};
