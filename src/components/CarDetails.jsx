const CarDetails = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Car Images & Main Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e" 
                    alt="Mercedes S-Class" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="aspect-video rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1555215695-3004980ad54e" 
                        alt="Mercedes S-Class" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Specifications */}
              <div className="mt-12 bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Engine</p>
                      <p className="font-semibold">5.2L V8 Twin Turbo</p>
                    </div>
                  </div>
                  {/* Add more specification blocks */}
                </div>
              </div>
  
              {/* Features & Description */}
              <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6">Features & Description</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Experience ultimate luxury with the Mercedes-Benz S-Class 2023. This flagship sedan combines 
                    cutting-edge technology with handcrafted details, offering an unparalleled driving experience. 
                    Features include heated and ventilated massaging seats, 4-zone climate control, and the latest 
                    MBUX infotainment system.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Panoramic Sunroof', 'Burmester 3D Sound System', 'Night Vision Assist', 'Air Suspension'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Reviews */}
              <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {[1, 2].map((review) => (
                    <div key={review} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                          <div>
                            <p className="font-semibold">John Smith</p>
                            <div className="flex items-center space-x-1 text-sm text-yellow-500">
                              ★★★★★
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">2 weeks ago</span>
                      </div>
                      <p className="text-gray-600">
                        Exceptional experience! The S-Class exceeded all expectations. Smooth ride and amazing features.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Booking Sidebar */}
            <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-8">
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">$299</span>
                    <span className="text-gray-500">/ day</span>
                  </div>
                  <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Available Now</span>
                  </div>
                </div>
  
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Minimum rental</span>
                    <span className="font-medium">2 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Security deposit</span>
                    <span className="font-medium">$1,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mileage limit</span>
                    <span className="font-medium">300 mi/day</span>
                  </div>
                </div>
  
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02]">
                  Check Availability
                </button>
  
                <div className="pt-6 border-t">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>24/7 Roadside Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Similar Cars */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Similar Luxury Vehicles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e" 
                    alt="Luxury Car" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW 7 Series</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-blue-500 text-2xl font-bold">$279</span>
                      <span className="text-gray-500 ml-2">/ day</span>
                    </div>
                    <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CarDetails;