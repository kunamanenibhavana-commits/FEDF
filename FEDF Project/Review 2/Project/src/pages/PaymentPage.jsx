import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./styles.css";

function PaymentPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const amount =
    location.state?.amount || 0;

  const upiString =
    `upi://pay?pa=workspacebooking@upi` +
    `&pn=Workspace Booking` +
    `&am=${amount}` +
    `&cu=INR`;

  const [paymentMethod, setPaymentMethod] =
    useState("");

  const handlePayment = () => {

    const bookingData = {
      roomName:
        location.state?.roomName || "",
      roomLocation:
        location.state?.roomLocation || "",
      roomContact:
        location.state?.roomContact || "",
      roomImage:
        location.state?.roomImage || "",
      roomType:
        location.state?.roomType || "",
      totalAmount: amount,
      date:
        new Date().toLocaleString(),
    };

    navigate(
      "/booking-success",
      {
        state: bookingData,
      }
    );
  };

  return (

    <div className="payment-container">

      <div className="payment-card">

        <div className="payment-icon">
          🛡️
        </div>

        <h2>
          Choose Payment Method
        </h2>

        <p className="payment-subtitle">
          Select your preferred payment option
        </p>

        <select
          className="payment-select"
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(
              e.target.value
            )
          }
        >

          <option value="">
            Select Payment Method
          </option>

          <option value="upi">
            UPI
          </option>

          <option value="card">
            Debit / Credit Card
          </option>

          <option value="netbanking">
            Net Banking
          </option>

        </select>

        <div className="qr-card">

          <h3>
            Scan & Pay
          </h3>

          <QRCodeCanvas
            value={upiString}
            size={180}
          />

          <p className="amount-text">
            Amount To Pay
          </p>

          <h1 className="amount">
            ₹ {amount}
          </h1>

        </div>

        {paymentMethod === "upi" && (

          <div className="payment-inputs">

            <input
              type="text"
              placeholder="Enter UPI ID"
            />

            <input
              type="password"
              placeholder="Enter UPI PIN"
            />

          </div>

        )}

        {paymentMethod === "card" && (

          <div className="payment-inputs">

            <input
              type="text"
              placeholder="Card Number"
            />

            <input
              type="text"
              placeholder="Expiry Date"
            />

            <input
              type="password"
              placeholder="CVV"
            />

          </div>

        )}

        {paymentMethod === "netbanking" && (

          <div className="payment-inputs">

            <input
              type="text"
              placeholder="Bank Name"
            />

            <input
              type="text"
              placeholder="Account Number"
            />

            <input
              type="password"
              placeholder="Password"
            />

          </div>

        )}

        <button
          className="pay-now-btn"
          onClick={handlePayment}
        >
          Pay Now →
        </button>

      </div>

    </div>

  );
}

export default PaymentPage;