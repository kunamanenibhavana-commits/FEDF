import { useParams, useNavigate, useLocation } from "react-router-dom";
import roomsData from "../data/roomsData";
import "./styles.css";

function DetailsPage() {

  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const selectedCity =
    queryParams.get("city");

  const data =
    roomsData[type] || [];

  const filteredData = data.filter(
    (item) =>
      item.city === selectedCity
  );

  const handleBooking = (item) => {

    if (!item.available) {
      alert(
        "This room is currently unavailable."
      );
      return;
    }

    const bookingData = {
      roomName: item.name,
      roomPrice: item.price,
      roomLocation: item.location,
      roomContact: item.contact,
      roomMap: item.map,
      roomImage: item.image,
      roomType: type,
    };

  if (type === "hotels") {
  navigate("/room-selection", {
    state: {
      ...bookingData,
      nextPage: "/hotel-options",
    },
  });
} else {
  navigate("/room-selection", {
    state: {
      ...bookingData,
      nextPage: "/facilities",
    },
  });
}
  };

  const handleReviews = (item) => {

    navigate("/reviews", {
      state: {
        roomName: item.name,
      },
    });

  };

  return (

    <div className="details-page">

      <h1>
        Available {type} in {selectedCity}
      </h1>

      <div className="room-grid">

        {filteredData.map((item) => (

          <div
            className="room-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
              className="room-image"
            />

            <div className="room-info">

              <h2>{item.name}</h2>

              <p>
                <b>Location:</b> {item.location}
              </p>

              <p>
                <b>Contact:</b> {item.contact}
              </p>

              <p>
                <b>Price:</b> ₹{item.price}
              </p>

              <p
                className={
                  item.available
                    ? "available"
                    : "not-available"
                }
              >
                {item.available
                  ? "🟢 Available"
                  : "🔴 Booked"}
              </p>

              <div className="button-row">

                <a
                  href={item.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="map-btn">
                    View on Maps
                  </button>
                </a>

                <button
                  className="review-btn"
                  onClick={() =>
                    handleReviews(item)
                  }
                >
                  Reviews
                </button>

                <button
                  className="book-btn"
                  disabled={!item.available}
                  onClick={() =>
                    handleBooking(item)
                  }
                >

                  {item.available
                    ? type === "hotels"
                      ? "Book Hotel"
                      : "Book Room"
                    : "Unavailable"}

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default DetailsPage;