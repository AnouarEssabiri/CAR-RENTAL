import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/config.firebase";

const Header = () => {
  // const navigate = useNavigate();
  const user = auth.currentUser;
  console.log(user)
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("User logged in:", user);
  //     // getUserDetails();
  //   } else {
  //     navigate("/login");
  //     console.log("No user logged in");
  //   }
  // });

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">LuxuryCars</h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                href="#"
                className="text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/cars"
                href="#"
                className="text-gray-700 hover:text-blue-600"
              >
                Cars
              </Link>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
              {user == null  && (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="bg-blue-600 text-white px-4 py-2 rounded-sm  hover:bg-blue-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="white-blue-600 text-blue-600 border-1 px-4 py-2 border-blue-600  hover:bg-white-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
              {user && (
                <div className="flex items-center space-x-6 bg-gray-200 rounded-md p-2">
                  <div className="cursor-pointer">
                    {/* icon notification */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"
                        fill="#0D0D0D"
                      />
                    </svg>
                  </div>

                  <div className="cursor-pointer">
                    {/* icon profile */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z" />
                    </svg>
                  </div>
                  <div className="cursor-pointer" onClick={logout}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      fill="#ff0000"
                    >
                      <g id="_01_align_center" data-name="01 align center">
                        <path d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z" />
                        <path d="M23.123,9.879,18.537,5.293,17.123,6.707l4.264,4.264L5,11l0,2,16.443-.029-4.322,4.322,1.414,1.414,4.586-4.586A3,3,0,0,0,23.123,9.879Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
