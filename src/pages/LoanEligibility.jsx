import React, { useEffect } from "react";
import "../styles/Loancheck.css";


const LoanEligibility = () => {
  useEffect(() => {
    const limitVal = parseFloat(localStorage.getItem("limit")) || 0;
    const formattedLimit = `Ksh ${limitVal.toFixed(2)}`;
    document.getElementById("limit").textContent = formattedLimit;
    document.getElementById("limit1").textContent = formattedLimit;
  }, []);

  const goToSecondPage = () => {
    window.location.href = "/apply";
  };

  return (
    <div className="loan-wrapper">
      {/* PWA Install Popup */}
      <div id="pwa-install-popup" className="pwa-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img src="assets/process.gif" alt="Authorization GIF" />
          </div>
        </div>
      </div>

      {/* Loan Message */}
      <div className="loan-message">
        <h1>Eligibility Successful. You Qualify for a Loan.</h1>
        <h2>Early settlement may result in reduction of interest.</h2>
        <h3>Loan Amount Qualified</h3>
        <h4 id="limit">Ksh 0.00</h4>
        <h5>
          Term <span>Receive Amount</span>
        </h5>
        <h4>
          14 days <span id="received">Ksh 0.00</span>
        </h4>
      </div>

      {/* Loan Table 1 */}
      <div className="loan-table">
        <div>
          <div className="labels">Awarded Loan Amount :</div>
          <div className="labels" id="limit1">
            <strong>Ksh 0.00</strong>
          </div>
        </div>
        <div>
          <div className="labels">Service Fee :</div>
          <div className="labels" id="Servicefee">
            <strong>Ksh 636</strong>
          </div>
        </div>
        <div>
          <div className="labels">Interest Rate :</div>
          <div className="labels">
            <strong>8%</strong>
          </div>
        </div>
        <div>
          <div className="labels">Interest Applied(8%) :</div>
          <div className="labels" id="interestrate">
            <strong>Ksh 520</strong>
          </div>
        </div>
        <div>
          <div className="labels">Disburseable Amount to Mpesa :</div>
          <div className="labels" id="received1">
            <strong>Ksh 5,344</strong>
          </div>
        </div>
      </div>

      {/* Loan Table 2 */}
      <div className="loan-tabless">
        <div>
          <div className="labels center">
            <strong>Mpesa Account</strong>
          </div>
        </div>
        <div>
          <div className="labels" id="phonenumber"></div>
        </div>
        <div>
          <div className="labels" id="youname"></div>
        </div>
        <button className="verify-button" onClick={goToSecondPage}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LoanEligibility;
