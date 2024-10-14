import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkTokenValidity } from "../../../../api-service";
import { homeLoading } from "../../../../assets/icons.js";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  console.log("ProtectedRoute");

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const valid = await checkTokenValidity();
      setIsAuthenticated(valid);
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        {homeLoading}
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
