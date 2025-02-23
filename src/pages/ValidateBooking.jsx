import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
import Sidebar from "../components/layout/Sidebar";
import useDatabase from "../hooks/useDatabase";
import NoRequestsMessage from "../components/ui/NoRequest";

const ValidateBooking = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [requests, setRequests] = useState();
  const { bookings } = useDatabase();
  const hasFetched = useRef(false);
  console.log(bookings);
  useEffect(() => {
    if (hasFetched.current) return; // Prevent second execution
    hasFetched.current = true;
    setRequests(bookings);
  }, [bookings]);
  console.log(requests);

  // Sample data - in real app this would come from props or API
  const books = [
    {
      id: "CR23456",
      car: "Mercedes-Benz S-Class 2023",
      customer: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      pickup: "15 Oct 2023 10:00 AM",
      return: "20 Oct 2023 05:00 PM",
      status: "pending",
      total: 1740.0,
      receivedAgo: "2 hours ago",
    },
    {
      id: "CR23457",
      car: "BMW 7 Series 2023",
      customer: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 234-5678",
      pickup: "18 Oct 2023 09:00 AM",
      return: "22 Oct 2023 06:00 PM",
      status: "approved",
      total: 1920.0,
      receivedAgo: "4 hours ago",
    },
    {
      id: "CR23458",
      car: "Audi A8 2023",
      customer: "Michael Brown",
      email: "michael.b@email.com",
      phone: "+1 (555) 345-6789",
      pickup: "20 Oct 2023 11:00 AM",
      return: "25 Oct 2023 03:00 PM",
      status: "declined",
      total: 2100.0,
      receivedAgo: "6 hours ago",
    },
  ];

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    declined: "bg-red-100 text-red-800",
  };

  const BookingCard = ({ isExpanded, onToggle }) => (
    <>
      {requests.map((book) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 cursor-pointer" onClick={onToggle}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-semibold">Booking {book.id}</h3>
                {/* <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    statusColors[book.status]
                  }`}
                >
                  {book.status.charAt(0).toUpperCase() +
                    book.status.slice(1)}
                </span> */}
              </div>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-medium">{book.userEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Car</p>
                <p className="font-medium">{book.car.make}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pickup</p>
                <p className="font-medium">{book.pickupDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="font-medium">${book.total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {isExpanded && (
            <div className="border-t p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm">Email: {book.userEmail}</p>
                  <p className="text-sm">Phone: {book.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Booking Details</h4>
                  <p className="text-sm">Return: {book.returnDate}</p>
                  {/* <p className="text-sm">Received: {book.receivedAgo}</p> */}
                </div>
              </div>

              {book.status === "pending" && (
                <div className="flex gap-4 mt-6">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all">
                    Accept
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all">
                    Decline
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
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
            ) : <NoRequestsMessage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateBooking;
