import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { MultiSelect } from "react-multi-select-component";

const FilterModal = ({ isOpen, onClose }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPrimaryIndustry, setSelectedPrimaryIndustry] = useState([]);
  const [selectedProcesses, setSelectedProcesses] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [userRating, setUserRating] = useState(1);
  const [meshScore, setMeshScore] = useState(1);
  const [resetKey, setResetKey] = useState(0); // Forces re-renders

  const industryOptions = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const stateOptions = ["Nursery Teacher (NT)", "Secondary Teacher (ST)"];
  const countryOptions = ["Teaching Assistant (TA)", "Admin Staff (AS)"];

  const handleReset = () => {
    setSelectedState("");
    setSelectedCountry("");
    setSelectedPrimaryIndustry([]);
    setSelectedProcesses([]);
    setSelectedMaterial([]);
    setUserRating(1);
    setMeshScore(1);
    setResetKey((prevKey) => prevKey + 1); // Forces re-render for MultiSelect components
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 fixed inset-0"></div>
      
      <div className="bg-white rounded-lg p-6 w-[600px] z-50 shadow-lg relative">
        
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* State & Country (Single Select) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">State</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-semibold">Country</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countryOptions.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Multi-Select Fields */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold">Primary Industry</label>
            <MultiSelect
              key={resetKey} // Forces re-render on reset
              options={industryOptions}
              value={selectedPrimaryIndustry}
              onChange={setSelectedPrimaryIndustry}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </div>
          <div>
            <label className="font-semibold">Processes</label>
            <MultiSelect
              key={resetKey + 1}
              options={industryOptions}
              value={selectedProcesses}
              onChange={setSelectedProcesses}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </div>
          <div>
            <label className="font-semibold">Material</label>
            <MultiSelect
              key={resetKey + 2}
              options={industryOptions}
              value={selectedMaterial}
              onChange={setSelectedMaterial}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </div>
        </div>

        {/* User Ratings & Mesh Score Sliders */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-semibold">User Ratings (1-5)</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              min="1"
              max="5"
              value={userRating}
              onChange={(e) => {
                let value = parseInt(e.target.value) || 1;
                value = value < 1 ? 1 : value > 5 ? 5 : value;
                setUserRating(value);
              }}
            />
          </div>
          <div>
            <label className="font-semibold">Mesh Score (1-10)</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              min="1"
              max="10"
              value={meshScore}
              onChange={(e) => {
                let value = parseInt(e.target.value) || 1;
                value = value < 1 ? 1 : value > 10 ? 10 : value;
                setMeshScore(value);
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-10">
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={handleReset}>Reset</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>Apply</button>
        </div>
      </div>
    </Dialog>
  );
};

export default FilterModal;
