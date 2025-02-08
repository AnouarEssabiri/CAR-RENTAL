import React from "react";
import PageLayout from "../components/layout/PageLayout";
import useForm from "../hooks/useForm";
// import { useBooking } from '../store/BookingContext';
// import { bookingService } from '../services/api';

const Booking = () => {
  return (
    <PageLayout
      title="Book Your Dream Car"
      subtitle="Fill in the details below to make your reservation"
      activePage="Booking"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter pickup location"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Drop-off Location
              </label>
              <input
                type="text"
                name="dropoffLocation"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter drop-off location"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Date
              </label>
              <input
                type="datetime-local"
                name="pickupDate"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Drop-off Date
              </label>
              <input
                type="datetime-local"
                name="dropoffDate"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Type
              </label>
              <select
                name="carType"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="economy">Economy</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
                <option value="suv">SUV</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marek
              </label>
              <input
                type="text"
                list="market"
                name="market"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <datalist id="market" name="carType" >
                <option value="BMW" />
                <option value="AUDI" />
                <option value="MERCEDES" />
                <option value="PORCHE" />
                <option value="TOYOTA" />
                <option value="VW" />
                <option value="VOLVO" />
                <option value="FORD" />
                <option value="NISSAN" />
                <option value="HONDA" />
                <option value="KIA" />
                <option value="LEXUS" />
                <option value="SUBARU" />
                <option value="MITSUBISHI" />
                <option value="CHEVROLET" />
                <option value="DODGE" />
                <option value="FERRARI" />
                <option value="LAMBORGHINI" />
                <option value="JAGUAR" />
                <option value="MASERATI" />
                <option value="ROLLS-ROYCE" />
              </datalist>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default Booking;
