import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/authContext";

const LogoutButton = styled.button`
  padding: 0.5em;
  border: 1px solid blue;
`;

export default function Logout() {
  debugger;
  const { logout, currentUser } = useAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (e) {
      console.log(e);
      alert("Error while logging out");
    }
  };
  if (!currentUser?.email) {
    return null;
  }
  return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>;
}
