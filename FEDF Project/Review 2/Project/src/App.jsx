import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ComplimentaryPage from "./pages/ComplimentaryPage";
import HotelOptions from "./pages/HotelOptions";
import ViewRooms from "./pages/ViewRooms";
import BillPage from "./pages/BillPage";
import PaymentPage from "./pages/PaymentPage";

import BookingHistory from "./pages/BookingHistory";
import Reviews from "./pages/Reviews";
import ViewMenu from "./pages/ViewMenu";
import BookingSuccess from "./pages/BookingSuccess";
import RoomSelection from "./pages/RoomSelection";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Search & Booking */}
        <Route path="/search/:type" element={<SearchPage />} />
        <Route path="/details/:type" element={<DetailsPage />} />

        {/* Pods & Board Rooms */}
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/complimentary" element={<ComplimentaryPage />} />

        {/* Hotels */}
        <Route path="/hotel-options" element={<HotelOptions />} />
        <Route path="/view-rooms" element={<ViewRooms />} />

        {/* Billing */}
        <Route path="/bill" element={<BillPage />} />
        <Route path="/payment" element={<PaymentPage />} />

        {/* Booking History */}
        <Route
          path="/booking-history"
          element={<BookingHistory />}
        />

        {/* Reviews */}
        <Route
          path="/reviews"
          element={<Reviews />}
        />
        <Route
  path="/view-menu"
  element={<ViewMenu />}
/>

<Route
  path="/booking-success"
  element={<BookingSuccess />}
/>

<Route
  path="/room-selection"
  element={<RoomSelection />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;