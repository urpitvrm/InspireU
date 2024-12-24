import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../db/db"; 
const auth = getAuth(app);

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) return; 

    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
      });
  };

  return (
    <button className="btn border-spacing-2 bg-pink-700 text-white" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogOut;
