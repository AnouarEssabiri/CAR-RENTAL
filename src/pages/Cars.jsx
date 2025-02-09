import Header from "../components/layout/Header";

const Cars = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* header Section  */}
        <Header  />
        {/* Filters Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <option>New York City</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <option>$100 - $500</option>
                  <option>$500 - $1000</option>
                  <option>$1000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Luxury</option>
                  <option>SUV</option>
                  <option>Convertible</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                    <select className="w-full px-3 py-2 rounded-lg border border-gray-300">
                      <option>All Brands</option>
                      <option>Mercedes-Benz</option>
                      <option>BMW</option>
                      <option>Audi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                    <div className="space-y-2">
                      {['Sunroof', 'GPS Navigation', 'Heated Seats', 'Bluetooth'].map((feature) => (
                        <label key={feature} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Car Listings */}
            <div className="flex-1">
              {/* Sorting Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">356 Results</h2>
                <select className="px-4 py-2 rounded-lg border border-gray-300">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
  
              {/* Cars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((car) => (
                  <div key={car} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                        alt="Car"
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm">
                        <span className="text-blue-500 font-medium">$299</span>/day
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Mercedes-Benz S-Class</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          5.2L V8
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Automatic
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                        <div className="text-sm text-gray-500">
                          <span className="block">Available Now</span>
                          <div className="flex items-center space-x-1">
                            ★★★★★
                            <span className="text-blue-500">(24)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Pagination */}
              <div className="mt-8 flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg ${
                      page === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cars;