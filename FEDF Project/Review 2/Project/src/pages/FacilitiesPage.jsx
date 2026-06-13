import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaChalkboard,
  FaDesktop,
  FaMicrophone,
  FaVideo,
  FaSnowflake,
  FaFan,
} from "react-icons/fa";

function FacilitiesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state || {};

  const [facilities, setFacilities] = useState([]);

  const facilityPrices = {
    Whiteboard: 200,
    Monitor: 500,
    Microphone: 300,
    "AV Equipment": 700,
    AC: 500,
    "NON-AC": 200,
  };

  const facilityIcons = {
    Whiteboard: (
      <FaChalkboard
        size={28}
        color="#11b8aa"
      />
    ),

    Monitor: (
      <FaDesktop
        size={28}
        color="#11b8aa"
      />
    ),

    Microphone: (
      <FaMicrophone
        size={28}
        color="#11b8aa"
      />
    ),

    "AV Equipment": (
      <FaVideo
        size={28}
        color="#11b8aa"
      />
    ),

    AC: (
      <FaSnowflake
        size={28}
        color="#11b8aa"
      />
    ),

    "NON-AC": (
      <FaFan
        size={28}
        color="#11b8aa"
      />
    ),
  };

  const handleChange = (facility) => {
    if (facilities.includes(facility)) {
      setFacilities(
        facilities.filter(
          (item) => item !== facility
        )
      );
    } else {
      setFacilities([
        ...facilities,
        facility,
      ]);
    }
  };

  const handleContinue = () => {
    navigate("/complimentary", {
      state: {
        ...bookingData,
        facilities,
        facilityPrices,
      },
    });
  };

  const handleViewMenu = () => {
    navigate("/view-menu");
  };

  return (
    <div className="facility-container">

      <div className="facility-card">

        <div className="facility-icon">
          🏢
        </div>

        <h2>Select Facilities</h2>

        <p>
          Choose the facilities you want
          to use
        </p>

        <div className="facility-grid">

          {Object.entries(
            facilityPrices
          ).map(([name, price]) => (

            <label
              key={name}
              className={`facility-item ${
                facilities.includes(name)
                  ? "selected"
                  : ""
              }`}
            >

              <input
                type="checkbox"
                checked={facilities.includes(name)}
                onChange={() =>
                  handleChange(name)
                }
              />

              <div className="facility-content">

                <div className="facility-image">
                  {facilityIcons[name]}
                </div>

                <h4>{name}</h4>

                <p>₹{price}</p>

              </div>

            </label>

          ))}

        </div>

        {/* Buttons */}

        <div className="facility-btns">

          <button
            className="view-menu-btn"
            onClick={handleViewMenu}
          >
            🍽 View Menu
          </button>

          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
}

export default FacilitiesPage;