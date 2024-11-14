import React, { useState } from 'react';
import { LineChart, BarChart, Battery, Zap, TrendingUp, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('day');

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Energy Analytics</h1>
          <div className="flex space-x-4">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Battery className="h-6 w-6 text-green-500" />, label: 'Total Production', value: '145.8 kWh' },
            { icon: <Zap className="h-6 w-6 text-blue-500" />, label: 'Total Consumption', value: '98.2 kWh' },
            { icon: <TrendingUp className="h-6 w-6 text-purple-500" />, label: 'Efficiency Rate', value: '85%' },
            { icon: <Calendar className="h-6 w-6 text-orange-500" />, label: 'Next Maintenance', value: '15 Days' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Energy Production</h2>
              <LineChart className="h-6 w-6 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Chart placeholder - would be replaced with actual chart library */}
              <p className="text-gray-500">Production Chart</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Consumption Patterns</h2>
              <BarChart className="h-6 w-6 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Chart placeholder - would be replaced with actual chart library */}
              <p className="text-gray-500">Consumption Chart</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Energy Usage Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Peak Hours', value: '35%', color: 'bg-red-500' },
              { label: 'Off-Peak Hours', value: '45%', color: 'bg-green-500' },
              { label: 'Standard Hours', value: '20%', color: 'bg-blue-500' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">{item.label}</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: item.value }}
                  ></div>
                </div>
                <p className="mt-2 text-xl font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}