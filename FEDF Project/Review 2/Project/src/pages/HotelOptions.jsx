import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function HotelOptions() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state || {};

  const [acType, setAcType] = useState("NON-AC");
  const [bedType, setBedType] = useState("Queen Size Bed");
  const [beds, setBeds] = useState(1);

  const acPrice = acType === "AC" ? 500 : 0;

  const handleContinue = () => {
    navigate("/bill", {
      state: {
        ...bookingData,

        hotelOptions: {
          acType,
          bedType,
          beds,
          acPrice,
        },
      },
    });
  };

  return (
    <div className="hotel-options-container">

      <div className="hotel-card small-card">

        <div className="hotel-header">

          <div className="hotel-icon">
            🏨
          </div>

          <div>
            <h2>Room Options</h2>
            <p>Customize your stay experience</p>
          </div>

        </div>

        {/* Selected Room */}

        {bookingData.roomNumber && (
          <div className="selected-room-box">

            <span>Selected Room</span>

            <h3>
              #{bookingData.roomNumber}
            </h3>

          </div>
        )}

        {/* AC OPTIONS */}

        <div className="option-grid">

          <div
            className={
              acType === "AC"
                ? "option-box active"
                : "option-box"
            }
            onClick={() => setAcType("AC")}
          >
            ❄️ AC (+₹500)
          </div>

          <div
            className={
              acType === "NON-AC"
                ? "option-box active"
                : "option-box"
            }
            onClick={() => setAcType("NON-AC")}
          >
            🍃 NON-AC
          </div>

        </div>

        {/* BED TYPE */}

        <div className="option-grid">

          <div
            className={
              bedType === "Queen Size Bed"
                ? "option-box active"
                : "option-box"
            }
            onClick={() =>
              setBedType("Queen Size Bed")
            }
          >
            🛏 Queen Bed
          </div>

          <div
            className={
              bedType === "King Size Bed"
                ? "option-box active"
                : "option-box"
            }
            onClick={() =>
              setBedType("King Size Bed")
            }
          >
            👑 King Bed
          </div>

        </div>

        {/* BEDS */}

        <div className="beds-section">

          <h4>Number of Beds</h4>

          <div className="beds-control">

            <button
              onClick={() =>
                setBeds(
                  beds > 1
                    ? beds - 1
                    : 1
                )
              }
            >
              -
            </button>

            <span>{beds}</span>

            <button
              onClick={() =>
                setBeds(beds + 1)
              }
            >
              +
            </button>

          </div>

        </div>

        {/* BUTTONS */}

        {/* BUTTONS */}

<div className="btn-row">

  <button
    className="view-btn"
    onClick={() =>
      navigate("/view-rooms", {
        state: bookingData,
      })
    }
  >
    👁 View Room
  </button>

  <button
    className="book-btn-green"
    onClick={handleContinue}
  >
    Continue →
  </button>

</div>

{/* VIEW MENU */}

<button
  className="menu-btn-full"
  onClick={() =>
    navigate("/view-menu")
  }
>
  🍽 View Menu
</button>

      </div>

    </div>
  );
}

export default HotelOptions;