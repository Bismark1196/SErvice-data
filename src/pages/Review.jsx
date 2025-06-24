import React, { useEffect, useState } from "react";
import "../styles/Review.css";

const Review = () => {
  const [limit, setLimit] = useState(0); // in MB
  const [savingAmount, setSavingAmount] = useState(0);
  const [userName, setUserName] = useState("Valued User");
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [dataLine, setDataLine] = useState("Not Set");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const lim = parseFloat(localStorage.getItem("limit")) || 0;
    const saveAmt =
      parseFloat(localStorage.getItem("totalPayable")) ||
      parseFloat(localStorage.getItem("savingsamountt")) ||
      0;
    const name = localStorage.getItem("name") || "Valued User";
    const verified = localStorage.getItem("paymentVerified");
    const provider = localStorage.getItem("dataline") || "Not Set";

    setLimit(lim);
    setSavingAmount(saveAmt);
    setUserName(name);
    setDataLine(provider);

    if (verified === "true") {
      setPaymentStatus("Confirmed");
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, []);

  const formatGB = (mb) => (mb / 1000).toFixed(2);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (loading) {
    return <div className="review-container">Processing your data bundle...</div>;
  }

  return (
    <div className="review-container">
      <header className="header">
        <div className="logo">
          <strong>DATA CHAPCHAP</strong>
          <div className="logo-circle">
            <span className="bolt">⚡</span>
          </div>
        </div>
        <div className="dark-mode" title="Toggle Dark Mode (coming soon)">🌙</div>
      </header>

      <main>
        <h1 role="heading" aria-level="1">
          <strong>{userName},</strong> your data bundle is being processed...
        </h1>
        <span className="dot-flashing" aria-hidden="true"></span>

        <section className="loan-message">
          <strong>
            Thank you for your payment. Your bundle will be disbursed shortly within 1hr once verification is complete.
          </strong>
          <div className="verify-buttons">Your Bundle Application Details:</div>
        </section>

        <section className="loan-table">
          <div>
            <div className="label">User Name:</div>
            <div className="label">{userName}</div>
          </div>

          <div>
            <div className="label">Data Line Provider:</div>
            <div className="label">{dataLine}</div>
          </div>

          <div>
            <div className="label">Applied Bundle:</div>
            <div className="label">
              {formatGB(limit)} GB ({limit.toLocaleString()} MB)
            </div>
          </div>

          <div>
            <div className="label">Amount Paid:</div>
            <div className="label">
              <strong id="savingsamountt">Ksh {savingAmount.toLocaleString()}</strong>
            </div>
          </div>

          <div>
            <div className="label">Payment Status:</div>
            <div
              className={`label ${
                paymentStatus === "Confirmed" ? "status-confirmed" : "status-pending"
              }`}
            >
              {paymentStatus === "Confirmed" ? "✅ Confirmed" : "⏳ Pending"}
            </div>
          </div>

          <div>
            <div className="label">Disbursement Status:</div>
            <div className="label">
              {paymentStatus === "Confirmed" ? (
                <span className="status-confirmed">📡 Disbursing...</span>
              ) : (
                <span className="status-pending">⌛ Awaiting Verification</span>
              )}
            </div>
          </div>

          <div>
            <div className="label">Timestamp:</div>
            <div className="label">{currentTime}</div>
          </div>

          {paymentStatus !== "Confirmed" && (
            <div>
              <button className="refresh-btn" onClick={handleRefresh}>
                🔄 Refresh Status
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">© Data ChapChap 2025</footer>
    </div>
  );
};

export default Review;
