import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function BillPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    facilities = [],
    facilityPrices = {},
    complimentaryItems = [],
    roomName = "",
    roomPrice = 0,
    roomLocation = "",
    roomContact = "",
    roomImage = "",
    roomType = "",
    roomNumber = "",
    hotelOptions = {},
  } = location.state || {};

  const facilitiesCost = facilities.reduce(
    (total, facility) =>
      total + (facilityPrices[facility] || 0),
    0
  );

  const hotelCharges =
    hotelOptions?.acPrice || 0;

  const totalAmount =
    roomPrice +
    facilitiesCost +
    hotelCharges;

  const handlePayment = () => {

    const booking = {
      roomName,
      roomLocation,
      roomImage,
      roomType,
      roomContact,
      facilities,
      complimentaryItems,
      totalAmount,
      date: new Date().toLocaleString(),
    };

    const history =
      JSON.parse(
        localStorage.getItem("bookingHistory")
      ) || [];

    history.push(booking);

    localStorage.setItem(
      "bookingHistory",
      JSON.stringify(history)
    );

    navigate("/payment", {
  state: {
    amount: totalAmount,
    roomName,
    roomLocation,
    roomContact,
    roomImage:
      location.state?.roomImage,
    roomType,
  },
});
  };

  return (

    <div className="summary-container">

      <div className="summary-card">

        <div className="summary-header">

          <div className="summary-step">
            2
          </div>

          <h3>
            MODERN CARD STYLE
          </h3>

        </div>

        <h2 className="summary-title">
          Booking Summary
        </h2>

        {/* Booking Details */}

        <div className="summary-box">

          <h3>
            🧾 Booking Details
          </h3>

          <div className="summary-row">
            <span>Type</span>
            <span>{roomType}</span>
          </div>

           <div className="summary-row">
  <span>Room Number</span>
  <span>{roomNumber}</span>
</div>
          <div className="summary-row">
            <span>Name</span>
            <span>{roomName}</span>
          </div>

          <div className="summary-row">
            <span>Location</span>
            <span>{roomLocation}</span>
          </div>

          <div className="summary-row">
            <span>Contact</span>
            <span>{roomContact}</span>
          </div>

          <div className="summary-row">
            <span>Base Price</span>
            <span>₹{roomPrice}</span>
          </div>

          {hotelOptions?.acType && (

            <>
              <div className="summary-row">
                <span>AC Type</span>
                <span>{hotelOptions.acType}</span>
              </div>

              <div className="summary-row">
                <span>Bed Type</span>
                <span>{hotelOptions.bedType}</span>
              </div>

              <div className="summary-row">
                <span>No. of Beds</span>
                <span>{hotelOptions.beds}</span>
              </div>

              <div className="summary-row">
                <span>AC Charges</span>
                <span>
                  ₹{hotelOptions.acPrice}
                </span>
              </div>
            </>

          )}

        </div>

        {/* Facilities + Complimentary */}

        <div className="summary-grid">

          <div className="mini-card">

            <h3>
              🎛 Selected Facilities
            </h3>

            {facilities.length > 0 ? (

              facilities.map((item) => (

                <p key={item}>
                  {item} (₹
                  {facilityPrices[item]})
                </p>

              ))

            ) : (

              <p>
                No Facilities Selected
              </p>

            )}

            <h4>
              Facilities Cost : ₹
              {facilitiesCost}
            </h4>

          </div>

          <div className="mini-card">

            <h3>
              🎁 Complimentary Services
            </h3>

            {complimentaryItems.length > 0 ? (

              complimentaryItems.map((item) => (

                <p key={item}>
                  {item}
                </p>

              ))

            ) : (

              <p>
                No Complimentary Services Selected
              </p>

            )}

          </div>

        </div>

        {/* Total Amount */}

        <div className="total-box">

          <div>

            <h3>
              Total Amount
            </h3>

            <p>
              Including all selected services
            </p>

          </div>

          <div className="total-price">
            ₹{totalAmount}
          </div>

        </div>

        <button
          className="pay-summary-btn"
          onClick={handlePayment}
        >
          Pay Now
        </button>

      </div>

    </div>

  );
}

export default BillPage;