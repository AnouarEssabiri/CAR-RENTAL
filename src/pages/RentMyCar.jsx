import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx";
import { Camera, Plus, X } from "lucide-react";
import Sidebar from "../components/layout/Sidebar.jsx";

const RentMyCar = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    make: "",
    model: "",
    year: "",
    dailyRate: "",
    category: "",
    features: [],
    specs: [],
    images: [],
    newSpec: "",
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      images: imageUrls,
    }));
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
  let db;

  const openDatabase = () => {
    const request = indexedDB.open("MyDatabase", 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log("Database opened successfully");
      // Call functions that require db here
      addUser({ id: Date.now(), name: "nouara", cars: [formData] });
    };

    request.onerror = (event) => {
      console.error("Database error:", event.target.errorCode);
    };
  };

  const addUser = (user) => {
    if (!db) {
      console.error("Database is not initialized");
      return;
    }
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");
    const request = store.add(user);

    request.onsuccess = () => {
      console.log("User added:", user);
    };

    request.onerror = (event) => {
      console.error("Add error:", event.target.errorCode);
    };
  };

  // Open the database
  openDatabase();

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
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const HandlSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("member", JSON.stringify(formData));
    const existingData = JSON.parse(localStorage.getItem("member"));
    const updatedData = { ...existingData,formData };
    localStorage.setItem("member", JSON.stringify(updatedData));
  };

  const features = [
    "Air Conditioning",
    "GPS Navigation",
    "Bluetooth",
    "Backup Camera",
    "Heated Seats",
    "Sunroof",
  ];

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gradient-to-br bg-gray-100 to-indigo-100 p-6">
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
            <form className="space-y-6" onSubmit={HandlSubmit}>
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
                    list="market"
                    className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., Toyota"
                  />
                  <datalist id="market" name="carType">
                    <option value="BMW" />
                    <option value="AUDI" />
                    <option value="MERCEDES" />
                    <option value="PORCHE" />
                    <option value="TOYOTA" />
                    <option value="VW" />
                    <option value="VOLVO" />
                    <option value="FORD" />
                    <option value="NISSAN" />
                    <option value="HONDA" />
                    <option value="KIA" />
                    <option value="LEXUS" />
                    <option value="SUBARU" />
                    <option value="MITSUBISHI" />
                    <option value="CHEVROLET" />
                    <option value="DODGE" />
                    <option value="FERRARI" />
                    <option value="LAMBORGHINI" />
                    <option value="JAGUAR" />
                    <option value="MASERATI" />
                    <option value="ROLLS-ROYCE" />
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
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Truck">Truck</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Sports">Sports</option>
                </select>
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
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
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
      </div>
    </>
  );
};

export default RentMyCar;
