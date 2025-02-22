import { Car } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  // const whoactive = props.active == "rent" ? "bg-blue-800/30 text-blue-400" : ""

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 min-h-screen p-6 fixed">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Luxury Rentals</h2>
          <p className="text-gray-400 text-sm">Dashboard</p>
        </div>

        <nav className="space-y-4">
          <Link
            to="/dashboard"
            className={`flex items-center ${props.active == "dashboard" ? "bg-blue-800/30 text-blue-400" : ""} space-x-3 text-gray-300 hover:bg-gray-800 p-3 rounded-lg transition-colors`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/RentMyCar"
            className={`flex items-center ${props.active == "rent" ? "bg-blue-800/30 text-blue-400" : ""} space-x-3 text-gray-300 hover:bg-gray-800 p-3 rounded-lg transition-colors`}
          >
            <Car />
            <span>Rent Car</span>
          </Link>
          <Link
            to="/ListMyCars"
            className={`flex items-center ${props.active == "mycars" ? "bg-blue-800/30 text-blue-400" : ""} space-x-3 text-gray-300 hover:bg-gray-800 p-3 rounded-lg transition-colors`}

>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>My Cars</span>
          </Link>
          {/* Add more navigation items */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, John</h1>
            <p className="text-gray-500">
              Your recent activities and statistics
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
