import React, { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Clock, Filter } from 'lucide-react';

export default function WalletPage() {
  const [filter, setFilter] = useState('all');

  const transactions = [
    {
      id: 1,
      type: 'sell',
      amount: '5.2 kWh',
      price: '0.12 ETH',
      buyer: 'House #245',
      date: '2024-03-15 14:30',
      status: 'completed',
    },
    {
      id: 2,
      type: 'buy',
      amount: '3.8 kWh',
      price: '0.08 ETH',
      seller: 'Solar Farm #12',
      date: '2024-03-15 12:15',
      status: 'completed',
    },
    {
      id: 3,
      type: 'sell',
      amount: '2.1 kWh',
      price: '0.05 ETH',
      buyer: 'House #178',
      date: '2024-03-14 16:45',
      status: 'pending',
    },
  ];

  const filteredTransactions = transactions.filter(tx => {
    if (filter === 'all') return true;
    return tx.type === filter;
  });

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Energy Wallet</h1>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Add Funds
          </button>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="h-8 w-8" />
              <span className="text-sm opacity-75">Connected</span>
            </div>
            <p className="text-sm mb-1">Available Balance</p>
            <h2 className="text-3xl font-bold mb-4">2.458 ETH</h2>
            <p className="text-sm opacity-75">Wallet ID: 0x1234...5678</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ArrowUpRight className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-600">Total Earned</span>
              </div>
              <span className="text-xl font-bold text-gray-900">0.856 ETH</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ArrowDownRight className="h-6 w-6 text-blue-500 mr-2" />
                <span className="text-gray-600">Total Spent</span>
              </div>
              <span className="text-xl font-bold text-gray-900">0.234 ETH</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <select
                  className="border border-gray-300 rounded-lg px-3 py-1"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Transactions</option>
                  <option value="buy">Purchases</option>
                  <option value="sell">Sales</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {tx.type === 'sell' ? (
                    <ArrowUpRight className="h-6 w-6 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-6 w-6 text-blue-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">
                      {tx.type === 'sell' ? `Sold to ${tx.buyer}` : `Bought from ${tx.seller}`}
                    </p>
                    <p className="text-sm text-gray-600">{tx.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{tx.price}</p>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-600">{tx.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}