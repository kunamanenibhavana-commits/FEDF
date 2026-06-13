function RoomCard({ item, onSelect }) {

  return (

    <div className="room-card">

      <img src={item.image} alt="" />

      <div className="room-info">

        <h2>{item.name}</h2>

        <p><b>Location:</b> {item.location}</p>

        <p><b>Contact:</b> {item.contact}</p>

        <p><b>Price:</b> ₹ {item.price}</p>

        <button onClick={onSelect}>
          Select
        </button>

      </div>

    </div>
  );
}

export default RoomCard;