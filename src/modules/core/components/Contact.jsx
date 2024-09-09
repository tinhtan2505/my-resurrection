import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default Contact;
