import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

function BookingSuccess() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking =
    location.state || {};

  return (

    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h2>
          Great, your booking is confirmed
        </h2>

        <p>
          Here's the information you'll need
        </p>

        <hr />

        <div className="success-details">

          <img
            src={
              booking.roomImage ||
              "https://images.unsplash.com/photo-1566073771259-6a8506099945"
            }
            alt=""
          />

          <div>

            <h3>
              {booking.roomName}
            </h3>

            <p>
              📍 {booking.roomLocation}
            </p>

            <p>
              📞 {booking.roomContact}
            </p>

            <p>
              🏢 {booking.roomType}
            </p>

            <p>
              💰 ₹{booking.totalAmount}
            </p>

            <p>
              📅 {booking.date}
            </p>

          </div>

        </div>

        <div className="success-buttons">

          <button
            className="calendar-btn"
            onClick={() =>
              alert(
                "Added to calendar successfully"
              )
            }
          >
            Save Booking
          </button>

          <button
            className="home-btn"
            onClick={() =>
              navigate("/home")
            }
          >
            Go Home
          </button>

        </div>

      </div>

    </div>

  );
}

export default BookingSuccess;