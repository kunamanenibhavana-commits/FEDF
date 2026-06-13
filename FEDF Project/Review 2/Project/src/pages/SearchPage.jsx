import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

function SearchPage() {

  const { type } = useParams();

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const handleSearch = () => {

    navigate(`/details/${type}?city=${city}`);
  };

  return (

    <div className="search-background">

      <div className="search-overlay">

        <div className="search-container">

          <h1>
            Find Your Perfect {type}
          </h1>

          <div className="search-form">

            {/* DATE */}

            <input
              type="date"
              required
            />

            {/* FROM */}

            <div className="time-group">

              <label>From</label>

              <input
                type="time"
                required
              />

            </div>

            {/* TO */}

            <div className="time-group">

              <label>To</label>

              <input
                type="time"
                required
              />

            </div>

            {/* CITY */}

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >

              <option value="">
                Select City
              </option>

              <option>Hyderabad</option>

              <option>Delhi</option>

              <option>Mumbai</option>

              <option>Chennai</option>

              <option>Vizag</option>

              <option>Bangalore</option>

            </select>

            {/* SEARCH */}

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Search Available Spaces
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SearchPage;