import React from 'react';

const Sidebar = ({ activePage }) => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-6 fixed">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Luxury Rentals</h2>
        <p className="text-gray-400 text-sm">{activePage}</p>
      </div>
      
      <nav className="space-y-4">
        <a 
          href="/dashboard" 
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            activePage === 'Dashboard' ? 'bg-blue-800/30 text-blue-400' : 'hover:bg-blue-800/30'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Dashboard</span>
        </a>
        <a 
          href="/booking" 
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            activePage === 'Booking' ? 'bg-blue-800/30 text-blue-400' : 'hover:bg-blue-800/30'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book a Car</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
