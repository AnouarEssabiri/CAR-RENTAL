import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx";
import { Camera, Map, Plus, X } from "lucide-react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Location from "../components/map/Map.jsx";
import { useSelector } from "react-redux";
import { addCar, addUser } from "../database/Database.jsx";
import useDatabase from "../hooks/useDatabase.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RentMyCar = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    dailyRate: "",
    category: "",
    features: [],
    specs: [],
    images: [],
    newSpec: "",
    city: "",
    available: true,
  });
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [error, setError] = useState({});
  const features = useSelector((state) => state.feature);
  const brands = useSelector((state) => state.brand);
  const categories = useSelector((state) => state.category);
  const [membername, setMembername] = useState(null);
  const [memberId, setMemberId] = useState(null);
  useEffect(() => {
    const memberData = JSON.parse(localStorage.getItem("member"));
    if (memberData) {
      setMembername(memberData);
      setMemberId(memberData.id);
      console.log(memberData);
    }
  }, []);
  const { db, members } = useDatabase();
  console.log(members);
  console.log(memberId);

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Check if files are selected
    if (!files || files.length === 0) {
      setError((prev) => ({
        ...prev,
        images: "Please select at least one image.",
      }));
      return;
    }

    const promises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((base64Images) => {
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, ...base64Images],
        }));
        setError((prev) => ({ ...prev, images: "" })); 
        toast.success("Images uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error converting images to Base64:", error);
        setError((prev) => ({
          ...prev,
          images: "Failed to upload images. Please try again.",
        }));
      });
  };
  

  const handleAddSpec = () => {
    if (formData.newSpec.trim()) {
      setFormData((prev) => ({
        ...prev,
        specs: [...prev.specs, prev.newSpec],
        newSpec: "",
      }));
    }
  };

  const removeSpec = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      specs: prev.specs.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((feature) => feature !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for the field being updated
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};

    // Check for empty required fields
    if (!formData.make.trim()) errors.make = "Make is required.";
    if (!formData.model.trim()) errors.model = "Model is required.";
    if (!formData.year.trim()) errors.year = "Year is required.";
    if (!formData.dailyRate.trim())
      errors.dailyRate = "Daily rate is required.";
    if (!formData.category.trim()) errors.category = "Category is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    if (formData.images.length === 0)
      errors.images = "Please upload at least one image.";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please fill all required fields.");
      return;
    }
    const user = {
      id: Date.now(),
      name: "salah",
      cars: [formData],
      location,
    };
    const newCar = {
      id: Date.now(),
      car: {...formData,location},
    };
    toast.success("Your car add successfuly!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setFormData({
      make: "",
      model: "",
      year: "",
      dailyRate: "",
      category: "",
      features: [],
      specs: [],
      images: [],
      newSpec: "",
      city: "",
      available: true,
    });
    addCar(db, memberId, newCar);
    addUser(db, user);
  };

  return (
    <>
      <Sidebar member={membername} active="rent" />
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br ml-[260px] bg-white via-indigo-100 to-indigo-100 p-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-gray-900">
              List Your Car
            </CardTitle>
            <p className="text-gray-500">
              Share your vehicle and start earning today
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Make
                  </label>
                  <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    list="brand"
                    className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., Toyota"
                  />
                  {error.make && (
                    <p className="text-sm text-red-500">{error.make}</p>
                  )}
                  <datalist id="brand" name="carType">
                    {brands.map((brand) => (
                      <option key={brand} value={brand} />
                    ))}
                  </datalist>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., Camry"
                  />
                  {error.model && (
                    <p className="text-sm text-red-500">{error.model}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., 2022"
                  />
                  {error.year && (
                    <p className="text-sm text-red-500">{error.year}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Daily Rate
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="dailyRate"
                      value={formData.dailyRate}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 p-3 pl-8 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                  {error.dailyRate && (
                    <p className="text-sm text-red-500">{error.dailyRate}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select vehicle type</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {error.category && (
                  <p className="text-sm text-red-500">{error.category}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Features
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        name="features"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Specifications
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="newSpec"
                    value={formData.newSpec}
                    onChange={handleInputChange}
                    className="flex-1 rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Add specification (e.g., '4 doors', 'Manual transmission')"
                  />
                  <button
                    type="button"
                    onClick={handleAddSpec}
                    className="rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-700"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                    >
                      {spec}
                      <button
                        type="button"
                        onClick={() => removeSpec(index)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="flex gap-2">
                  <input
                    type="hidden"
                    name="location"
                    value={location.lat + "," + location.lng}
                    onChange={handleInputChange}
                    className="flex-1 rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Add location from map ('33.5731','-7.5898')"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="flex-1 rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Add city"
                  />
                  <button
                    type="button"
                    onClick={() => setShowMap(!showMap)}
                    className="rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-700"
                  >
                    <a href="#map">
                      <Map className="h-5 w-5" />
                    </a>
                  </button>
                </div>
                {error.city && (
                  <p className="text-sm text-red-500">{error.city}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Photos
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="text-sm text-gray-500">
                        Click to upload photos
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      name="images"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                {error.images && (
                  <p className="text-sm text-red-500">{error.images}</p>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Car preview ${index + 1}`}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                List Your Vehicle
              </button>
            </form>
          </CardContent>
        </Card>
        {showMap && <Location location={setLocation} />}
      </div>
    </>
  );
};

export default RentMyCar;
