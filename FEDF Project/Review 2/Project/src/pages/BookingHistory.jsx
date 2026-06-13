import { useState, useEffect } from "react";
import "./styles.css";

function BookingHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const bookings =
      JSON.parse(
        localStorage.getItem("bookingHistory")
      ) || [];

    setHistory(bookings);

  }, []);

  const handleDelete = (index) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to remove this booking?"
    );

    if (!confirmDelete) return;

    const updatedHistory =
      history.filter(
        (_, i) => i !== index
      );

    localStorage.setItem(
      "bookingHistory",
      JSON.stringify(updatedHistory)
    );

    setHistory(updatedHistory);
  };

  return (

    <div className="history-container">

      <h1 className="history-title">
        📖 Booking History
      </h1>

      {history.length === 0 ? (

        <div className="empty-history">

          <h2>No Bookings Found</h2>

          <p>
            Your booking history will appear here.
          </p>

        </div>

      ) : (

        history.map((booking, index) => (

          <div
            className="history-card"
            key={index}
          >

            <img
              src={
                booking.roomImage ||
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              }
              alt={booking.roomName}
              className="history-image"
            />

            <div className="history-info">

              <h2>
                🏢 {booking.roomName}
              </h2>

              <p>
                📍 <b>Location:</b>{" "}
                {booking.roomLocation}
              </p>

              <p>
                💰 <b>Amount:</b> ₹
                {booking.totalAmount}
              </p>

              <p>
                📅 <b>Date:</b>{" "}
                {booking.date}
              </p>

              <button
                className="delete-booking-btn"
                onClick={() =>
                  handleDelete(index)
                }
              >
                🗑 Remove Booking
              </button>

            </div>

          </div>

        ))

      )}

    </div>

  );
}

export default BookingHistory;