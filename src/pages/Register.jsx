import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config.firebase";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../database/Database";
import useDatabase from "../hooks/useDatabase";


const Register = () => {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {db} = useDatabase();
  const googleProvider = new GoogleAuthProvider();

  const HandlChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful:", result.user);
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
    }
  };

  const SignUp = async (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, phoneNumber} = FormData;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: Date.now(),
          email: userCredential.user.email,
          username: `${FormData.firstName} ${FormData.lastName}`,
        })
      );
      const user = {
        id: Date.now(),
        username: `${FormData.firstName} ${FormData.lastName}`,
        firstName,
        lastName,
        email,
        phoneNumber,
      };
      addUser(db, user);
      toast.success("Account created successfully!");
      navigate("/");
    }  catch (error) {
      console.error("Error signing up:", error.message);
      if (error.code === "auth/invalid-email") {
        console.error("Invalid email address");
      } else if (error.code === "auth/wrong-password") {
        console.error("Incorrect password");
      } else if (error.code === "auth/user-not-found") {
        console.error("Email address not found");
      } else if (error.code === "auth/email-already-in-use") {
        setError((prev) => ({ ...prev, email: "Email already in use." }));
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden bg-white">
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

        <div className="w-full md:w-1/2 py-12 px-8 md:px-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-500">Get started with your free account</p>
          </div>

          <form className="space-y-6" onSubmit={SignUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John"
                  name="firstName"
                  value={FormData.firstName}
                  onChange={HandlChange}
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
                  name="lastName"
                  value={FormData.lastName}
                  onChange={HandlChange}
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
                name="email"
                value={FormData.email}
                onChange={HandlChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="06 00 00 00 00"
                name="phoneNumber"
                value={FormData.phoneNumber}
                onChange={HandlChange}
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
                  name="password"
                  value={FormData.password}
                  onChange={HandlChange}
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
                  name="confirmPassword"
                  value={FormData.confirmPassword}
                  onChange={HandlChange}
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
                  I agree to the{" "}
                  <a href="Home" className="text-blue-500 hover:text-blue-700">
                    Terms of Service
                  </a>{" "}
                  and
                  <a href="Home" className="text-blue-500 hover:text-blue-700">
                    {" "}
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg "
            >
              Create Account
              <span className="ml-2 transition-all transform hover:translate-x-10">
                →
              </span>
            </button>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button onClick={signInWithGoogle}
                type="button"
                className="w-[100%] flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Google
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold hover:underline"
              >
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
