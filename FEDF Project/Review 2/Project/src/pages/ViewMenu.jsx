import "./styles.css";

function ViewMenu() {

  return (
    <div className="menu-container">

      <div className="menu-card">

        <h1>☕ Refreshment Menu</h1>

        <div className="menu-item">
          <span>Tea</span>
          <span>₹20</span>
        </div>

        <div className="menu-item">
          <span>Coffee</span>
          <span>₹30</span>
        </div>

        <div className="menu-item">
          <span>Biscuits</span>
          <span>₹40</span>
        </div>

        <div className="menu-item">
          <span>Sandwich</span>
          <span>₹80</span>
        </div>

        <div className="menu-item">
          <span>Burger</span>
          <span>₹120</span>
        </div>

        <div className="menu-item">
          <span>Cold Drink</span>
          <span>₹50</span>
        </div>

      </div>
    </div>
  );
}

export default ViewMenu;