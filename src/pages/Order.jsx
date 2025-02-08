const Order = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Order Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-xl opacity-90">Your reservation ID: #CR23456</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Car Details */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Rental Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1555215695-3004980ad54e" 
                      alt="Car" 
                      className="w-32 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Mercedes-Benz S-Class</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>2023 Model</span>
                        <span>•</span>
                        <span>Automatic</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pickup Date:</span>
                      <span className="font-medium">15 Oct 2023 10:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Return Date:</span>
                      <span className="font-medium">20 Oct 2023 05:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Pricing Breakdown */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Price Breakdown</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Rate (5 days × $299)</span>
                    <span className="font-medium">$1,495.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium Insurance</span>
                    <span className="font-medium">$245.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">$198.50</span>
                  </div>
                  <div className="flex justify-between border-t pt-4">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-xl font-bold text-blue-600">$1,938.50</span>
                  </div>
                </div>
              </div>
  
              {/* Customer Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Pickup Location</h4>
                    <p className="text-gray-600">City Center Branch<br/>123 Luxury Avenue</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Drop-off Location</h4>
                    <p className="text-gray-600">Same as Pickup Location</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <p className="text-gray-600">john.doe@email.com<br/>(555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <p className="text-gray-600">Visa ending in 4679<br/>Exp 05/25</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Order Summary & Status */}
            <div className="space-y-8">
              {/* Status Timeline */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Order Status</h2>
                <div className="relative pl-6 border-l-2 border-blue-200">
                  {[
                    { status: 'Confirmed', date: 'Oct 12 10:15 AM', active: true },
                    { status: 'Preparation', date: 'Estimated Oct 14', active: false },
                    { status: 'Pickup', date: 'Oct 15 10:00 AM', active: false },
                    { status: 'Return', date: 'Oct 20 05:00 PM', active: false }
                  ].map((step, index) => (
                    <div key={step.status} className="relative mb-8">
                      <div className={`absolute w-4 h-4 rounded-full -left-[13px] ${step.active ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                      <h3 className={`font-medium ${step.active ? 'text-blue-600' : 'text-gray-600'}`}>
                        {step.status}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{step.date}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Support & Actions */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                    Download Invoice
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg transition-colors">
                    Contact Support
                  </button>
                  <div className="pt-4 border-t text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                      Back to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Important Notes */}
          <div className="mt-8 bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-4">Important Rental Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Please arrive 30 minutes before pickup time for documentation</li>
              <li>Valid driver's license and credit card required at pickup</li>
              <li>Mileage limit: 300 miles/day ($0.50/mile after limit)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Order;