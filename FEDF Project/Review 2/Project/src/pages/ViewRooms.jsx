import { useNavigate } from "react-router-dom";

function ViewRooms() {

  const navigate = useNavigate();

  return (

    <div className="view-room-page">

      <h1>Room Photos</h1>

      <div className="gallery">

        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="" />

        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" />

        <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c" alt="" />

      </div>

      <button onClick={() => navigate("/bill")}>
        Continue Booking
      </button>

    </div>
  );
}

export default ViewRooms;