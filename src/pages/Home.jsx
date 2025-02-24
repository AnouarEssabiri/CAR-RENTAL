import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import { Map, User } from "lucide-react";
import MapUser from "../components/map/MapUser";
import useDatabase from "../hooks/useDatabase";
import { auth } from "../config/config.firebase";
import { Riple } from "react-loading-indicators";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: "",
    brandCar: "",
    carType: "all",
  });
  const carTypes = useSelector((state) => state.category);
  const { members } = useDatabase();
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterCars, setFilterCars] = useState(null);

  const DisplayMap = () => {
    setShowMap(!showMap);
  };
  const user = auth.currentUser;
  console.log(user);
  const CheckUserIn = () => {
    if (user == null) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (members.length > 0) {
      setLoading(false);
    }
  }, [members]);

  useEffect(() => {
    setLoading(true);

    if (Array.isArray(members)) {
      ChoseCategory("all");
      // setFilterCars(members.flatMap((member) => member.cars));
      setLoading(false);
    } else {
      console.error("members is not an array:", members);
    }
  }, [members]);

  const ChoseCategory = (type) => {
    if (Array.isArray(members)) {
      if (type === "all") {
        setFilterCars(members.flatMap((member) => member.cars));
      } else {
        const filtered = members
          .flatMap((member) => member.cars)
          .filter((car) => car.category === type);
        setFilterCars(filtered);
      }
    } else {
      console.error("members is not an array:", members);
    }
  };

  console.log(filterCars);
  console.log(members);

  // const carTypes = ["All", "Electric", "Sports", "SUV", "Luxury", "Economy"];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search params:", searchParams);
    // Implement search functionality
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header />
      {/* Hero Section */}
      <div className="relative h-[600px] mb-12">
        {showMap && (
          <button
            onClick={DisplayMap}
            className="absolute z-50  top-4 p-4 rounded-lg right-2 bg-red-600"
          >
            close
          </button>
        )}

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Find Your Perfect Drive
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Luxury and performance vehicles for any occasion
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl">
              <form
                onSubmit={handleSearch}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter city"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={searchParams.pickupDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand Car
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Entre brand car"
                    value={searchParams.brandCar}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Car Type
                  </label>
                  <select
                    name="carType"
                    value={searchParams.carType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    {carTypes.map((type) => (
                      <option value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-4 flex items-center space-x-2">
                  <button
                    type="submit"
                    className="w-[93%] bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Search Available Cars
                  </button>
                  <button
                    type="submit"
                    className="w-[7%] bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex justify-center"
                    onClick={DisplayMap}
                  >
                    <Map />
                  </button>
                </div>
              </form>
            </div>
            {showMap && <MapUser />}
          </div>
        </div>
      </div>

      {/* Car Type Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex overflow-x-auto space-x-4 py-4">
          <button
            onClick={() => ChoseCategory("all")}
            className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
          >
            All
          </button>
          {carTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => ChoseCategory(type)}
              className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Vehicles</h2>
        <div
          className={
            loading
              ? ""
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {loading ? (
            <div className="min-h-screen w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Riple color="#18a1fe" size="large" />
              </div>
            </div>
          ) : (
            filterCars &&
            members.map((member) =>
              filterCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    {car.car.images.length > 0 && (
                      <img
                        src={car.car.images[0]}
                        alt={`${car.car.make} ${car.car.model}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    )}

                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                        car.car.available
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {car.car.available ? "available" : "reserved"}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {car.car.make} {car.car.model}
                        </h3>
                        <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                          {car.car.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">
                          ${car.car.dailyRate}
                        </span>
                        <span className="text-gray-500 text-sm">/day</span>
                        <div className="flex items-center mt-1">
                          <User />
                          <span className="text-sm text-gray-600 ml-1">
                            {/* Display the owner's name from the user object */}
                            {member.username}
                            {/* {members.find((member) =>
                            member.cars.some((c) => c.id === car.id)
                          )?.name || "Unknown Owner"} */}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Specifications
                      </h4>
                      <ul className="space-y-2">
                        {car.car.specs.map((spec, index) => (
                          <li
                            key={index}
                            className="text-gray-600 flex items-center text-sm"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {car.car.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={`/booking/${car.id}`}
                        onClick={CheckUserIn}
                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Book Now
                      </Link>
                      <button
                        onClick={CheckUserIn}
                        className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Round-the-clock assistance for all your needs
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Insurance Included</h3>
          <p className="text-gray-600">
            Comprehensive coverage for peace of mind
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
          <p className="text-gray-600">Simple and fast reservation process</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-6">
            Book your dream car today and experience luxury driving at its
            finest
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Booking
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">RideNow</h4>
              <p className="text-gray-400">
                Premium car rental service for the discerning driver.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Become a Member
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Car Rental
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Chauffeur Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Airport Transfer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Corporate Rental
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RideNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
