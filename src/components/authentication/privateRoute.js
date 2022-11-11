import { Route, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../../contexts/authContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser);
  if (!currentUser?.email) {
    return <Navigate to="/login" />;
  }
  return children;
}
