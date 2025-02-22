import React from "react";
import useDatabase from "../hooks/useDatabase";
import Sidebar from "../components/layout/Sidebar.jsx";

// import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const ListMyCars = () => {
  // Sample data with enhanced structure
  const { users, locations } = useDatabase();
  console.log(users);
  return (
    <>
      <Sidebar active="mycars" />
      <div className="min-h-screen bg-gradient-to-br ml-[260px] from-gray-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto ">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                My Listed Vehicles
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your rental vehicles and view performance metrics
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Vehicle
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <select className="px-4 py-2 rounded-lg border border-gray-300">
                <option>All Categories</option>
                <option>Luxury</option>
                <option>SUV</option>
                <option>Sports</option>
                <option>Economy</option>
              </select>

              <select className="px-4 py-2 rounded-lg border border-gray-300">
                <option>All Locations</option>
                <option>Los Angeles</option>
                <option>San Francisco</option>
                <option>New York</option>
              </select>

              <div className="relative flex-1 max-w-xs">
                <input
                  type="text"
                  placeholder="Search by brand, model..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Cars List */}
          <div className="grid grid-cols-1 gap-6">
            {users.map((user) =>
              user.cars.map((car) => (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Car Image */}
                    <div className="md:w-1/3">
                      {/* <img
                    src={user.images[0]}
                    alt={`${user.brand} ${user.model}`}
                    className="w-full h-48 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  /> */}
                    </div>

                    {/* Car Details */}
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">
                             {car.make} {car.model} {car.year}
                          </h3>
                          {/* <p className="text-gray-600 mt-1">{user.location}</p> */}
                          <div className="flex items-center mt-2">
                            <span className="text-blue-600 text-lg font-bold">
                              ${car.dailyRate}
                            </span>
                            <span className="text-gray-500 ml-1">/ day</span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            car.available === true
                              ? "bg-green-100 text-green-800"
                              : car.available === false
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {car.available ? "available" : "booked"}
                        </span>
                      </div>

                      {/* Specs & Features */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-gray-500 text-sm mb-2">
                            Specifications
                          </p>
                          <ul className="space-y-1">
                            {car.specs.map((spec,index) => (
                              <li key={index} className="text-sm">{car.spec}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm mb-2">Features</p>
                          <div className="flex flex-wrap gap-2">
                            {car.features.map((feature, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div>
                          <p className="text-gray-500 text-sm">Bookings</p>
                          <p className="font-medium">{user.bookings}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Rating</p>
                          <p className="font-medium flex items-center">
                            ★ {user.name} 
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Earnings</p>
                          <p className="font-medium">${user.earnings}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Category</p>
                          <p className="font-medium">{user.category}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-4 border-t pt-4">
                        <button className="text-blue-600 hover:text-blue-700 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 flex items-center ml-auto">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMyCars;
