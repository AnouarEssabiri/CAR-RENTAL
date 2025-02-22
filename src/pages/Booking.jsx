import { useParams } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";
import { useEffect, useState } from "react";
import { Riple } from "react-loading-indicators";
import { ToastContainer, toast } from "react-toastify";
import { addBook } from "../database/Database";
import { auth } from "../config/config.firebase";
import useAuth from "../hooks/useAuth";

const Booking = () => {
  const { CarId } = useParams();
  const { db, users, cars } = useDatabase();
  const [bookData, setBookData] = useState({
    pickupDate: "",
    returnDate: "",
    status:"pending",
    car: null,
    total: 0,
    userEmail: null, 
    phone: ""
  });
  const user = useAuth();
  console.log(user?.email)

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [phone , setPhone] = useState("")
  const [loading, setLoading] = useState(true);
  const [fCar, setFCar] = useState(null);
  const [daysDifference, setDaysDifference] = useState(1);
  const [total, setTotal] = useState(0);

  // Handle pickup date change
  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
    calculateDifference(e.target.value, returnDate);
  };

  // Handle return date change
  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
    calculateDifference(pickupDate, e.target.value);
  };

  const calculateDifference = (pickup, returnDate) => {
    if (pickup && returnDate) {
      const pickupTime = new Date(pickup).getTime();
      const returnTime = new Date(returnDate).getTime();

      if (returnTime >= pickupTime) {
        const differenceInDays = Math.ceil(
          (returnTime - pickupTime) / (1000 * 60 * 60 * 24)
        );
        setDaysDifference(differenceInDays);
      } else {
        setDaysDifference(0);
        toast.error("Return date cannot be before pickup date.");
      }
    } else {
      setDaysDifference(1);
    }
  };

  useEffect(() => {
    if (users.length > 0 && cars.length > 0) {
      const foundCar = users
        .flatMap((user) => user.cars)
        .find((car) => parseInt(car.id) === parseInt(CarId));
      setFCar(foundCar);
      setLoading(false);
    }
  }, [CarId, users, cars]);

  useEffect(() => {
    if (fCar && daysDifference > 0) {
      const totalCost = fCar.dailyRate * daysDifference;
      setTotal(totalCost);
    }
  }, [fCar, daysDifference]);

  // Update bookData whenever relevant data changes
  useEffect(() => {
    setBookData((prev) => ({
      ...prev,
      pickupDate,
      returnDate,
      car: fCar,
      status:"pending",
      total,
      userEmail: user?.email,
      phone
    }));
  }, [pickupDate, returnDate, fCar, total]);

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    if (!pickupDate || !returnDate || !fCar || total <= 0) {
      toast.error("Please fill all required fields and ensure the total is valid.");
      return;
    }

    console.log("Booking Data:", bookData);


    toast.success("Booking confirmed! Data sent to the admin dashboard.");
    addBook(db,bookData)
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <Riple color="#18a1fe" size="large" text="" textColor="" />
        </div>
      </div>
    );
  }

  // Show error if car is not found
  if (!fCar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-lg font-semibold text-red-600">Car not found!</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Car Details Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {fCar?.make} {fCar?.model} {fCar?.year}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-1 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              5.2L V8
            </span>
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-1 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Automatic
            </span>
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-1 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              5 Seats
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Car Image Gallery */}
          {fCar.images.map((image, index) => (
            <div key={index} className="space-y-6">
              <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={`${fCar.make} ${fCar.model}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-video rounded-xl overflow-hidden shadow-sm cursor-pointer">
                  <img
                    src={image}
                    alt={`${fCar.make} ${fCar.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-8">
              {/* Pricing Header */}
              <div className="border-b pb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-blue-600">
                    ${fCar.dailyRate}
                  </span>
                  <span className="text-gray-500">/ day</span>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Date
                    </label>
                    <input
                      type="datetime-local"
                      onChange={handlePickupDateChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date
                    </label>
                    <input
                      type="datetime-local"
                      onChange={handleReturnDateChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    value={fCar.city}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Location
                  </label>
                  <input
                    type="text"
                    value={fCar.city}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number Phone
                  </label>
                  <input
                    type="text"
                    placeholder="06 00 00 00 00"
                    onChange={(e)=>setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Price</span>
                    <span className="font-medium">${fCar.dailyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      ${fCar.dailyRate} ×{" "}
                      {daysDifference === 1
                        ? `${daysDifference} day`
                        : `${daysDifference} days`}
                    </span>
                    <span className="font-medium">${total}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">${total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment and Booking */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Payment Method
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>•••• •••• •••• 4679</option>
                    <option>Add new card</option>
                  </select>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02]"
                >
                  Confirm Booking
                </button>

                <p className="text-center text-sm text-gray-500">
                  By continuing, you agree to our
                  <a href="#" className="text-blue-600 hover:underline">
                    {" "}
                    Terms of Service
                  </a>{" "}
                  and
                  <a href="#" className="text-blue-600 hover:underline">
                    {" "}
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;