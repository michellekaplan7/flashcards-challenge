import React from "react";
import "./UserBank.css";

import { useSelector } from "react-redux";

import { bankAmount } from "../../features/userSlice";

const UserBank = () => {
  const bank = useSelector(bankAmount);

  return (
    <div className="bank-container">
      <p>Bank</p>
      <p>${bank}</p>
    </div>
  );
};

export default UserBank;
