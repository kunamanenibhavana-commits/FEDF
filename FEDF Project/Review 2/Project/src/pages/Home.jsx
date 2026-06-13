import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">

      {/* Top Right Booking History Button */}

      <div className="top-history-btn">

        <button
          className="history-btn"
          onClick={() => navigate("/booking-history")}
        >
          📖 Booking History
        </button>

      </div>

      <h1>Select Your Space</h1>

      <div className="card-container">

        <div
          className="home-card"
          onClick={() => navigate("/search/pods")}
        >
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Small Pods"
          />
          <h2>Small Pods</h2>
        </div>

        <div
          className="home-card"
          onClick={() => navigate("/search/boardrooms")}
        >
          <img
            src="https://images.unsplash.com/photo-1497366412874-3415097a27e7"
            alt="Board Rooms"
          />
          <h2>Board Rooms</h2>
        </div>

        <div
          className="home-card"
          onClick={() => navigate("/search/hotels")}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel Rooms"
          />
          <h2>Hotel Rooms</h2>
        </div>

      </div>

    </div>

  );
}

export default Home;