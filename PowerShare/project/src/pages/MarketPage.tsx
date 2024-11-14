import React, { useState } from 'react';
import { Battery, ArrowUpRight, ArrowDownRight, Search } from 'lucide-react';

interface EnergyListing {
  id: string;
  seller: string;
  amount: number;
  price: number;
  type: 'solar' | 'wind' | 'hybrid';
  distance: number;
}

export default function MarketPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const listings: EnergyListing[] = [
    { id: '1', seller: 'Solar House #156', amount: 5.2, price: 0.12, type: 'solar', distance: 0.5 },
    { id: '2', seller: 'Wind Farm #023', amount: 12.8, price: 0.28, type: 'wind', distance: 1.2 },
    { id: '3', seller: 'Community Solar', amount: 8.5, price: 0.18, type: 'hybrid', distance: 0.8 },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || listing.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Energy Market</h1>
          <div className="flex space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search listings..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="solar">Solar</option>
              <option value="wind">Wind</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Battery className="h-6 w-6 text-green-500" />
                    <span className="ml-2 font-semibold text-gray-900">{listing.seller}</span>
                  </div>
                  <span className="text-sm text-gray-500">{listing.distance}km away</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available Energy</span>
                    <span className="font-semibold">{listing.amount} kWh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price per kWh</span>
                    <span className="font-semibold">{listing.price} ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Type</span>
                    <span className="capitalize">{listing.type}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                  Purchase Energy
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Energy Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Current Production</p>
                  <p className="text-2xl font-bold text-gray-900">2.8 kWh</p>
                </div>
                <ArrowUpRight className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Current Consumption</p>
                  <p className="text-2xl font-bold text-gray-900">1.5 kWh</p>
                </div>
                <ArrowDownRight className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}