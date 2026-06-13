import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function ComplimentaryPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedItems, setSelectedItems] = useState([]);

  const services = [
    { name: "Wifi", icon: "📶" },
    { name: "TV", icon: "📺" },
    { name: "Water", icon: "💧" },
    { name: "Biscuits", icon: "🍪" },
  ];

  const handleChange = (item) => {

    if (selectedItems.includes(item)) {

      setSelectedItems(
        selectedItems.filter(
          (i) => i !== item
        )
      );

    } else {

      setSelectedItems([
        ...selectedItems,
        item,
      ]);

    }
  };

  const handleBookNow = () => {

    navigate("/bill", {

      state: {

        ...location.state,

        complimentaryItems:
          selectedItems,

      },

    });

  };

  return (

    <div className="complimentary-container">

      <div className="complimentary-card">

        <div className="step-circle">
          6
        </div>

        <div className="gift-icon">
          🎁
        </div>

        <h2>
          Complimentary Services
        </h2>

        <p>
          These services are on us!
        </p>

        <div className="services-grid">

          {services.map((service) => (

            <div
              key={service.name}
              className="service-card"
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <input
                type="checkbox"
                checked={selectedItems.includes(
                  service.name
                )}
                onChange={() =>
                  handleChange(
                    service.name
                  )
                }
              />

              <h4>
                {service.name}
              </h4>

            </div>

          ))}

        </div>

        <button
          className="book-now-btn"
          onClick={handleBookNow}
        >
          Book Now →
        </button>

      </div>

    </div>

  );
}

export default ComplimentaryPage;