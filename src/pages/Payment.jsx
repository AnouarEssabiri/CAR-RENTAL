import { Link } from "react-router-dom";

const Payment = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-8">Payment Details</h2>
                
                {/* Card Preview */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg transform -rotate-2"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-sm opacity-80">Card Number</p>
                        <p className="text-xl font-mono tracking-wider">•••• •••• •••• 4679</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm opacity-80">Card Holder</p>
                        <p className="font-medium">JOHN DOE</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Expires</p>
                        <p className="font-medium">05/25</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full -mr-4 -mb-4"></div>
                    </div>
                  </div>
                </div>
  
                {/* Payment Form */}
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Save card for future payments</span>
                  </div>
  
                  <div className="border-t pt-6">
                    <Link to="/order"
                      type="submit"
                      className="w-full bg-blue-600 text-center hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02]"
                    >
                      Pay $1,938.50
                    </Link>
                  </div>
                </form>
              </div>
  
              {/* Security Info */}
              <div className="mt-6 text-center text-sm text-gray-600">
                <p className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Secure SSL Encryption</span>
                </p>
                <div className="mt-2 flex items-center justify-center space-x-4">
                  {['visa', 'mastercard', 'amex', 'discover'].map((card) => (
                    <img 
                      key={card}
                      src={`/icons/${card}.svg`} 
                      alt={card}
                      className="h-8"
                    />
                  ))}
                </div>
              </div>
            </div>
  
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e" 
                  alt="Car" 
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold">Mercedes-Benz S-Class</h3>
                  <p className="text-sm text-gray-600">2023 Model • Automatic</p>
                </div>
              </div>
  
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rental Period:</span>
                  <span className="font-medium">5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup Date:</span>
                  <span className="font-medium">15 Oct 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Return Date:</span>
                  <span className="font-medium">20 Oct 2023</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-lg font-bold text-blue-600">$1,938.50</span>
                </div>
              </div>
  
              <div className="mt-6 text-sm text-gray-500">
                <p>Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a></p>
                <p className="mt-2">By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">terms</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Payment;