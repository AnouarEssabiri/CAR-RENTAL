import { useParams } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";
import { useEffect } from "react";

const Booking = () => {
  const { CarId } = useParams();
  const { db, users, cars } = useDatabase();
  const fCar = users.flatMap((user) => user.cars).find((car) => parseInt(car.id) === parseInt(CarId));
  console.log(fCar)
  useEffect(() => {
    console.log(CarId);
    console.log(users);
    console.log(cars);
    const iscar = users
      .find((user) =>
        user.cars.some((car) => parseInt(car.id) === parseInt(CarId))
      )
      ?.cars.find((car) => parseInt(car.id) === parseInt(CarId));
    console.log(iscar);
    console.log(iscar);
    const Wcars = [iscar];
    console.log(Wcars);

    console.log(Wcars);

    Wcars.map((wc) => {
      console.log(wc);
    });
    // for (let key in iscar) {
    //   console.log(iscar[key]);
    // }
  }, [CarId, db]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Car Details Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {/* {cars.find((car) => car.id === parseInt(CarId)).make} */}
            {fCar.make} {fCar.model} {fCar.year}
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
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                alt="Mercedes S-Class"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-video rounded-xl overflow-hidden shadow-sm cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                    alt="Mercedes S-Class"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-8">
              {/* Pricing Header */}
              <div className="border-b pb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-blue-600">$299</span>
                  <span className="text-gray-500">/ day</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm text-gray-500">
                    Minimum 2 days rental
                  </span>
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
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>City Center Branch</option>
                    <option>Airport Terminal</option>
                    <option>Downtown Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Location
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Same as Pickup Location</option>
                    <option>City Center Branch</option>
                    <option>Airport Terminal</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Add Insurance
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
                      <div className="text-left">
                        <div className="font-medium">Basic</div>
                        <div className="text-sm text-gray-500">$29/day</div>
                      </div>
                    </button>
                    <button className="p-4 border rounded-lg hover:border-blue-500 transition-colors border-blue-500 bg-blue-50">
                      <div className="text-left">
                        <div className="font-medium">Premium</div>
                        <div className="text-sm text-gray-500">$49/day</div>
                      </div>
                    </button>
                    <button className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
                      <div className="text-left">
                        <div className="font-medium">None</div>
                        <div className="text-sm text-gray-500">No coverage</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">$299 × 3 days</span>
                    <span className="font-medium">$897.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-medium">$147.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">$128.50</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">$1,172.50</span>
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

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02]">
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
