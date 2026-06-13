import { useState } from "react";

function PaymentForm() {

  const [paymentType, setPaymentType] = useState("UPI");

  return (

    <div className="payment-box">

      <select
        value={paymentType}
        onChange={(e) => setPaymentType(e.target.value)}
      >

        <option>UPI</option>

        <option>Net Banking</option>

        <option>Card</option>

      </select>

      {
        paymentType === "UPI" && (
          <>
            <input type="text" placeholder="Enter UPI ID" />

            <input type="password" placeholder="Enter UPI PIN" />
          </>
        )
      }

      {
        paymentType === "Net Banking" && (
          <>
            <input type="text" placeholder="Enter Bank Name" />

            <input type="text" placeholder="Enter Account Number" />
          </>
        )
      }

      {
        paymentType === "Card" && (
          <>
            <input type="text" placeholder="Enter Card Number" />

            <input type="text" placeholder="Enter Expiry Date" />

            <input type="password" placeholder="Enter CVV" />
          </>
        )
      }

      <button>
        Pay Successfully
      </button>

    </div>
  );
}

export default PaymentForm;