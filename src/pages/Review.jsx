import React, { useEffect, useState } from "react";
import "../styles/Review.css";


const Review = () => {
  const [limit, setLimit] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [loanType, setLoanType] = useState("Personal Loan");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lim = parseFloat(localStorage.getItem("limit")) || 0;
    const saveAmt = parseFloat(localStorage.getItem("saveamount")) || 0;
    const loan = localStorage.getItem("name") || "Education Loan";

    // Simulate loading delay
    setTimeout(() => {
      setLimit(lim);
      setSavingAmount(saveAmt);
      setLoanType(loan);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="review-container">Loading your loan details...</div>;
  }

  return (
    <div className="review-container">
      <div className="header">
        <div className="logo">
          INUA CHAPAA
          <div className="logo-circle">
            <span className="bolt">⚡</span>
          </div>
        </div>
        <div className="dark-mode">🌙</div>
      </div>

      <h1>Your loan application was successful. Kindly wait as we process</h1>
      <span className="dot-flashing"></span>

      <div className="loan-message">
        Your loan application was successful and is under review. Your M-Pesa
        account will be credited as soon as the review is completed.
        <button className="verify-buttons">
          Your Loan Application Details :
        </button>
      </div>

      <div className="loan-table">
        <div>
          <div className="label">Name :</div>
          <div className="label">{loanType}</div>
        </div>
        <div>
          <div className="label">Applied Amount :</div>
          <div className="label">Ksh {limit.toFixed(2)}</div>
        </div>
        <div>
          <div className="label">Loan Status :</div>
          <div className="status-pending">
            <span style={{ marginLeft: "8px" }}>Processing...</span>
          </div>
        </div>
        <div>
          <div className="label">Account Savings :</div>
          <div className="label">Ksh {savingAmount.toFixed(2)}</div>
        </div>
        <div>
          <div className="label">Disbursement Status :</div>
          <div className="label">
            <span className="status-not-verified">Pending</span>
          </div>
        </div>
      </div>

      <div className="footer">© Inua Chapaa 2025</div>
    </div>
  );
};

export default Review;
