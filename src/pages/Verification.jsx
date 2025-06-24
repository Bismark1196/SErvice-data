import React, { useState, useEffect } from "react";
import "../styles/Verification.css";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [limit, setLimit] = useState();
  const [savingAmount, setSavingAmount] = useState(0);
  const [messageVisible, setMessageVisible] = useState(false);
  const [mpesaMessage, setMpesaMessage] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationClass, setVerificationClass] = useState("");

  const navigate = useNavigate();

  localStorage.setItem("paymentVerified", "true");


 useEffect(() => {
  const storedLimit = parseFloat(localStorage.getItem("limit"));
  const storedPayable = parseFloat(localStorage.getItem("totalPayable"));
  if (!isNaN(storedLimit)) setLimit(storedLimit);
  if (!isNaN(storedPayable)) setSavingAmount(storedPayable);
}, []);



  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("0741633791");
    alert("Phone Number!");
  };

  const openModal = () => setMessageVisible(true);
  const closeModal = () => {
    setMessageVisible(false);
    setMpesaMessage("");
    setVerificationMessage("");
    setVerificationClass("");
  };

  const verifyTransaction = () => {
  const message = mpesaMessage.trim().toLowerCase();

 const isValid = (() => {
  const normalized = message.toLowerCase().replace(/\s+/g, ' ').trim();
  return (
    normalized.includes("confirmed") &&
    normalized.includes("ksh") &&
    (normalized.includes("sent to") ||
     normalized.includes("paid to") ||
     normalized.includes("0741633791")) &&
    normalized.includes("wycliffe pade")
  );
})();


  if (isValid) {
    setVerificationMessage("Payment verified successfully!");
    setVerificationClass("success");
    setTimeout(() => {
      closeModal();
      navigate("/review");
    }, 3000);
  } else {
    setVerificationMessage(
      "Please paste the full and correct M-PESA confirmation message, including recipient 'Wycliffee Pade'."
    );
    setVerificationClass("error");
  }
  };

  const goToSavingsPlan = () => {
    window.location.href = "savings";
  };

  useEffect(() => {
  const isAuthenticated = localStorage.getItem("name") && localStorage.getItem("phone");
  if (!isAuthenticated) {
  }
}, []);


  return (
    <>
      <h3>.</h3>
      <div className="container">
        <h5>
          You're just one step away from receiving{" "}
          <strong>Ksh ~{(limit / 1000).toFixed(1)}GB ({limit}MB)</strong>!
          Delay could cost you this opportunity.
          Receive your data bundle instantly, and enjoy uninterrupted browsing.
        </h5>

        <div className="labels">
          <button
            className="verify-btnn"
            onClick={goToSavingsPlan}
            style={{
              marginTop: "5%",
              color: "orangered",
              background: "linear-gradient(135deg, #31463f, #070930)",
              fontSize: "medium",
            }}
          >
            Change Data Plan
          </button>
        </div>

        <div className="loan-tabless">
          <div className="labels">
            <span style={{ marginLeft: "5%" }}>
              <strong>How to receive Data on DATA CHAPCHAP:</strong>
            </span>
          </div>
          <div className="labels">
            Go to M~Pesa :{" "}
            <span style={{ marginLeft: "5.5%" }}>
              <strong>M~pesa</strong>
            </span>
          </div>
          <div className="labels">
            Send Money :{" "}
            <span>
              <strong>Phone Number</strong>
            </span>
          </div>
          <div className="labels">
            Phone Number :{" "}
            <span>
              <strong>0741633791</strong>
            </span>
          </div>
          <div className="labels">
            Phone Name :{" "}
            <span>
              <strong>Wycliffe Pade</strong>
            </span>
          </div>

          <div className="labels">
            <button
              className="verify-btnn"
              onClick={copyPhoneNumber}
              id="copytill"
            >
              CLICK TO COPY PHONE NUMBER
            </button>
          </div>
          <div className="labels">
            Enter Amount :{" "}
            <span style={{ marginLeft: "13%" }}>
              <strong id="savingsamountt">
                Ksh {savingAmount.toLocaleString()}
              </strong>
            </span>
          </div>

          <button className="open-modal-btn" onClick={openModal}>
            Verify Payment to Initiate data Disbursement
          </button>
        </div>

        <div className={`overlay ${messageVisible ? "show" : ""}`}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="verifyTitle">
  <h2 id="verifyTitle">Verify Payments</h2>
  
  <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">×</button>
  
  <p>
    Copy the entire confirmation message you received from M-PESA
    after making payments and paste it in the field below, then click the verify button.
  </p>

  <textarea
    className="input-field"
    placeholder="Paste M-PESA Message Here"
    rows="4" 
    value={mpesaMessage}
    onChange={(e) => setMpesaMessage(e.target.value)}
  />

  <button className="verify-btn" onClick={verifyTransaction}>
    VERIFY
  </button>

  {verificationMessage && (
    <div className={`message ${verificationClass}`}>
      {verificationMessage}
    </div>
            )}
          </div>
        </div>

        <div className="footer">© Data ChapChap 2025</div>
      </div>
    </>
  );
};

export default Verification;
