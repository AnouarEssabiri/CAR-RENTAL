const Register = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden bg-white">
          {/* Left Side - Car Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Luxury Car" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Join Our Journey</h2>
              <p className="opacity-90">Experience premium mobility</p>
            </div>
          </div>
  
          {/* Right Side - Registration Form */}
          <div className="w-full md:w-1/2 py-12 px-8 md:px-16">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-500">Get started with your free account</p>
            </div>
  
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
  
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>
  
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
  
              <div className="flex items-center">
                <label className="flex items-center text-sm text-gray-600">
                  <input 
                    type="checkbox" 
                    className="rounded text-blue-500 focus:ring-blue-500" 
                  />
                  <span className="ml-2">
                    I agree to the <a href="Home" className="text-blue-500 hover:text-blue-700">Terms of Service</a> and 
                    <a href="Home" className="text-blue-500 hover:text-blue-700"> Privacy Policy</a>
                  </span>
                </label>
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
              >
                Create Account
                <span className="ml-2">→</span>
              </button>
  
              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>
  
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  className="w-1/2 flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    {/* Google SVG icon */}
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="w-1/2 flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    {/* Facebook SVG icon */}
                  </svg>
                  Facebook
                </button>
              </div>
  
              <p className="text-center text-sm text-gray-500 mt-8">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold hover:underline">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;