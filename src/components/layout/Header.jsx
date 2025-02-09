import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">LuxuryCars</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/" href="#" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link to="/cars" href="#" className="text-gray-700 hover:text-blue-600">
                  Cars
                </Link>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  About
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Contact
                </a>
                <div className="flex items-center space-x-4">
                  <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-sm  hover:bg-blue-700">
                    Sign In
                  </Link >
                  <Link to="/register" className="white-blue-600 text-blue-600 border-1 px-4 py-2 border-blue-600  hover:bg-white-700">
                    Sign Up
                  </Link >
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Header;