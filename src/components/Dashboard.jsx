import React, { useState } from 'react';
import '../index';

const SupplierCard = ({ supplier }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center mr-6 w-24">
          <img 
            src={supplier.logo || "/api/placeholder/80/80"} 
            alt="Company Logo" 
            className="w-16 h-16 mb-2" 
          />
          <button className="bg-blue-600 text-white text-sm py-1 px-4 rounded-md w-full">
            View
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          <div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Company Name : </span>
              <span>{supplier.name}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Company Mail: </span>
              <span>{supplier.mail}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Company No : </span>
              <span>{supplier.no}</span>
            </div>
          </div>
          
          <div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Country : </span>
              <span>{supplier.country}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">State : </span>
              <span>{supplier.state}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">City : </span>
              <span>{supplier.city}</span>
            </div>
          </div>
          
          <div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Years of experience : </span>
              <span>{supplier.experience}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Total Employees : </span>
              <span>{supplier.employees}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Certification : </span>
              <span>{supplier.certification}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 md:ml-6 md:w-52">
          <div className="text-center mb-4">
            <p className="mb-2">User Ratings</p>
            <div className="flex justify-center">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <span key={index} className={`text-2xl ${index < supplier.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-2">Mesh Score</p>
            <div className="flex items-center">
              <div className="flex-none bg-gray-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-1">
                1
              </div>
              <div className="flex-1 mx-1">
                <div className="bg-gray-200 rounded-full h-4 relative">
                  <div 
                    className="bg-yellow-400 h-4 rounded-full" 
                    style={{ width: `${supplier.meshScore * 10}%` }}
                  ></div>
                  <span className="absolute text-xs font-medium left-1 top-0 leading-4 text-white">
                    {supplier.meshScore}/10
                  </span>
                </div>
              </div>
              <div className="flex-none bg-gray-200 text-gray-700 w-6 h-6 flex items-center justify-center rounded-full text-xs ml-1">
                10
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="supplier-details mt-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Supplier Details: </span>
          {supplier.details}
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const supplierData = [
    {
      id: 1,
      logo: '/api/placeholder/80/80',
      name: '98',
      mail: 'Kike',
      no: 'Crbingrle',
      country: '01/01/1900',
      state: 'TSR Compliance',
      city: '14/03/2018',
      experience: 'B45 8QR',
      employees: '123456789',
      certification: 'abc@gmail.com',
      details: 'Identify suppliers with the necessary capabilities to manufacture and finish components and/or assemblies for different SKUs of HVAC, ensuring compliance with quality standards, durability, and cost-competitiveness. Supplier capability may include a portion, or all processes listed. Please refer to the attached Supplier Capability document for details. Please respond by uploading your profile and contact information.',
      rating: 4,
      meshScore: 6.5
    },
    {
      id: 2,
      logo: '/api/placeholder/80/80',
      name: '98',
      mail: 'Kike',
      no: 'Crbingrle',
      country: '01/01/1900',
      state: 'TSR Compliance',
      city: '14/03/2018',
      experience: 'B45 8QR',
      employees: '123456789',
      certification: 'abc@gmail.com',
      details: 'Identify suppliers with the necessary capabilities to manufacture and finish components and/or assemblies for different SKUs of HVAC, ensuring compliance with quality standards, durability, and cost-competitiveness. Supplier capability may include a portion, or all processes listed. Please refer to the attached Supplier Capability document for details. Please respond by uploading your profile and contact information.',
      rating: 4,
      meshScore: 6.5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-3 px-4 shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex justify-center">
          <img src="/api/placeholder/150/40" alt="Mesh Works Logo" className="h-8" />
        </div>
      </header>
      
      <main className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 rounded-full p-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4l-3 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">AI Supplier Search Agent</h1>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 w-full md:w-82 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition duration-300 whitespace-nowrap">
              Search
            </button>
            <button className="bg-white border border-orange-500 text-orange-500 py-2 px-6 rounded-md hover:bg-orange-50 transition duration-300 whitespace-nowrap">
              Filter
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-50 transition duration-300 whitespace-nowrap">
              Reset
            </button>
          </div>
        </div>
        
        <div className="supplier-list">
          {supplierData.map(supplier => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </main>
      
      <footer className="bg-white py-3 px-6 border-t border-gray-200 mt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            2025 © Mesh Works Inc.
          </div>
          <div>
            | Version 2.0
          </div>
          <div>
            Created By Team <span className="font-bold text-orange-600">Almighty Push..!</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;