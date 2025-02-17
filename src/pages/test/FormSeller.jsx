const FormSeller = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">List Your Vehicle for Rent</h1>
            
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="w-1/4 h-2 bg-blue-200 rounded-full">
                  <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm text-blue-600">Step 1 of 3</span>
              </div>
            </div>
  
            <form className="space-y-8">
              {/* Vehicle Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-4">Vehicle Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Toyota"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Camry"
                      required
                    />
                  </div>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="number"
                      min="2000"
                      max={new Date().getFullYear() + 1}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price/Day ($)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="In kilometers"
                      required
                    />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your vehicle in detail..."
                  ></textarea>
                </div>
              </div>
  
              {/* Rental Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-4">Rental Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Available From</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Available Until</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Locations</label>
                  <div className="space-y-2">
                    {['Home Address', 'Airport', 'City Center'].map((location) => (
                      <label key={location} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded text-blue-500 focus:ring-blue-500"
                        />
                        <span>{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rental Terms</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        className="w-20 px-3 py-2 rounded-lg border border-gray-300"
                        placeholder="Min"
                      />
                      <span>Minimum Rental Days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        className="w-20 px-3 py-2 rounded-lg border border-gray-300"
                        placeholder="Max"
                      />
                      <span>Maximum Rental Days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        className="w-20 px-3 py-2 rounded-lg border border-gray-300"
                        placeholder="300"
                      />
                      <span>Daily Mileage Limit</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Vehicle Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Sunroof', 'GPS', 'Bluetooth', 'Heated Seats', 'Backup Camera', 'USB Charger', 'Child Seat', 'Snow Tires'].map((feature) => (
                    <label key={feature} className="flex items-center space-x-2 p-3 border rounded-lg hover:border-blue-500">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500 focus:ring-blue-500"
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
  
              {/* Photos Upload */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-4">Vehicle Photos</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
                  <div className="space-y-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col items-center text-sm text-gray-600">
                      <p>Drag and drop up to 10 photos</p>
                      <p className="mt-1">or</p>
                      <label className="relative cursor-pointer mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        <span>Browse Files</span>
                        <input type="file" className="sr-only" multiple accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {/* Uploaded photos preview */}
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="relative group">
                        <img
                          src="https://via.placeholder.com/200"
                          alt="Preview"
                          className="h-32 w-full object-cover rounded-lg"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Terms and Submission */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-blue-500 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and 
                    <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a>
                  </span>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200"
                >
                  List Vehicle for Rent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormSeller;