import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
import Sidebar from "../components/layout/Sidebar";
import useDatabase from "../hooks/useDatabase";
import NoRequestsMessage from "../components/ui/NoRequest";
import { UpdateBook } from "../database/Database";
import { useNavigate } from "react-router-dom";
import useSearchBook from "../hooks/useSearchBook";

const ValidateBooking = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState();
  const { db, bookings } = useDatabase();
  const request = useSearchBook(searchQuery);
  const navigate = useNavigate();
  // const hasFetched = useRef(false);
  console.log(bookings);
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setRequests(request);
    } else {
      setRequests(bookings);
    }
  }, [bookings]);
  console.log(requests);

  const acceptRequest = (id) => {
    UpdateBook(db, id, "approved")
      .then(() => {
        navigate("/dashboard");
        console.log(`Booking ${id} accepted successfully.`);
        // Optionally, refresh the bookings list or update state
      })
      .catch((error) => {
        console.error("Error accepting booking:", error);
      });
  };

  // Function to handle rejecting a booking
  const rejectRequest = (id) => {
    UpdateBook(db, id, "declined")
      .then(() => {
        navigate("/dashboard");
        console.log(`Booking ${id} rejected successfully.`);
        // Optionally, refresh the bookings list or update state
      })
      .catch((error) => {
        console.error("Error rejecting booking:", error);
      });
  };

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    declined: "bg-red-100 text-red-800",
  };

  const BookingCard = ({ booking, isExpanded, onToggle }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 cursor-pointer" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold">Booking {booking.id}</h3>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                statusColors[booking.status]
              }`}
            >
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Customer</p>
            <p className="font-medium">{booking.userEmail}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Car</p>
            <p className="font-medium">{booking.car.make}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Pickup</p>
            <p className="font-medium">{booking.pickupDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="font-medium">${booking.total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t p-4 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <p className="text-sm">Email: {booking.userEmail}</p>
              <p className="text-sm">Phone: {booking.phone}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Booking Details</h4>
              <p className="text-sm">Return: {booking.returnDate}</p>
            </div>
          </div>

          {booking.status === "pending" && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => acceptRequest(booking.id)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
              >
                Accept
              </button>
              <button
                onClick={() => rejectRequest(booking.id)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
              >
                Decline
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Sidebar active="dashboard" />
      <div className="min-h-screen ml-[260px] bg-gradient-to-br ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Booking Requests</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-600" />
                <select
                  className="border rounded-lg px-3 py-2"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {bookings.length > 0 ? (
              bookings
                .filter(
                  (booking) =>
                    filterStatus === "all" || booking.status === filterStatus
                )
                .map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    isExpanded={selectedBooking === booking.id}
                    onToggle={() =>
                      setSelectedBooking(
                        selectedBooking === booking.id ? null : booking.id
                      )
                    }
                  />
                ))
            ) : (
              <NoRequestsMessage />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateBooking;
