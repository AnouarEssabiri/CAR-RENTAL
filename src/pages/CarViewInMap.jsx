import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { FaCar } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
// import dynamic from 'next/dynamic';

// // Dynamically import to handle SSR issues with Leaflet
// const Map = dynamic(
//   () => import('react-leaflet').then((mod) => mod.MapContainer),
//   { ssr: false }
// );

const CarViewInMap = () => {
  const initialPosition = [51.505, -0.09]; // London coordinates
  const cars = [
    {
      id: 1,
      position: [51.505, -0.09],
      model: 'Mercedes S-Class',
      price: 299,
      features: ['Automatic', '5 Seats', 'GPS'],
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      available: true
    },
    // Add more car objects...
  ];

  return (
    <div className="h-screen w-full relative">
      {/* Search and Filter Bar */}
      <div className="absolute top-4 left-4 right-4 z-[1000] bg-white rounded-xl shadow-lg p-4 max-w-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
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
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="h-full w-full">
        {/* <Map
          center={initialPosition}
          zoom={13}
          className="h-full w-full z-0"
        > */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {cars.map((car) => (
            <Marker key={car.id} position={car.position}>
              <Popup className="custom-popup min-w-[300px]">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium shadow-sm">
                      ${car.price}/day
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{car.model}</h3>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          car.available ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      ></span>
                      <span className="text-sm">
                        {car.available ? 'Available Now' : 'Booked'}
                      </span>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        {/* </Map> */}
      </div>

      {/* Filter Sidebar */}
      <div className="absolute top-20 left-4 z-[1000] bg-white rounded-xl shadow-lg p-6 w-80 hidden lg:block">
        <h3 className="text-xl font-bold mb-4">Filter Cars</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Car Type</h4>
            <div className="space-y-2">
              {['Luxury', 'SUV', 'Convertible', 'Electric'].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Price Range</h4>
            <input
              type="range"
              min="50"
              max="500"
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {['GPS', 'Sunroof', 'AWD', 'Heated Seats'].map((feature) => (
                <label key={feature} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span className="text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Geolocation Button */}
      <div className="absolute bottom-4 right-4 z-[1000]">
        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarViewInMap;