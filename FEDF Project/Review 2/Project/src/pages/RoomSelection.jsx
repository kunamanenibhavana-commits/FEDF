import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function RoomSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state || {};

  const rooms = Array.from(
    { length: 20 },
    (_, i) => ({
      number: 101 + i,
      reserved: [
        103, 106, 110, 113, 116,
        119, 122, 128, 131, 134, 138,
      ].includes(101 + i),
    })
  );

  const [selectedRoom, setSelectedRoom] =
    useState(null);

  const handleContinue = () => {

  if (!selectedRoom) {
    alert("Please select a room");
    return;
  }

  if (bookingData.nextPage) {

    navigate(
      bookingData.nextPage,
      {
        state: {
          ...bookingData,
          roomNumber: selectedRoom,
        },
      }
    );

  } else {

    navigate("/facilities", {
      state: {
        ...bookingData,
        roomNumber: selectedRoom,
      },
    });

  }

};

  return (
    <div className="room-selection-container">

      <div className="room-selection-card">

        <div className="room-banner">
          <h1>Choose Your Room</h1>

          <p>
            Select from available rooms,
            small pods or boardrooms
          </p>
        </div>

        <div className="legend">
          <span>⬜ Available</span>
          <span>🟥 Reserved</span>
        </div>

        <div className="room-grid-selection">

          {rooms.map((room) => (

            <div
              key={room.number}
              className={
                room.reserved
                  ? "room-box reserved"
                  : selectedRoom === room.number
                  ? "room-box selected"
                  : "room-box"
              }
              onClick={() => {
                if (!room.reserved) {
                  setSelectedRoom(room.number);
                }
              }}
            >
              {room.number}
            </div>

          ))}

        </div>

        <div className="room-info-box">
          <p>White rooms are available.</p>
          <p>Red rooms are already booked.</p>
        </div>

        <div className="room-footer">

          <div className="selected-room">
            Selected Room :
            {" "}
            <strong>
              {selectedRoom || "None"}
            </strong>
          </div>

          <button
            className="continue-room-btn"
            onClick={handleContinue}
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoomSelection;