import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  isRegistered: boolean;
}

export default function Hero({ onGetStarted, isRegistered }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Decentralized Energy Trading for a{' '}
              <span className="text-green-500">Sustainable Future</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Join the renewable energy revolution. Trade surplus energy, connect with your community,
              and contribute to a greener planet.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {!isRegistered && (
                <button
                  onClick={onGetStarted}
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              )}
              <Link
                to="/about"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <Stat value="10k+" label="Active Users" />
              <Stat value="50MW+" label="Energy Traded" />
              <Stat value="30%" label="Cost Savings" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-yellow-500" />
                  <span className="ml-2 text-lg font-semibold dark:text-white">Live Energy Market</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Updated 2m ago</span>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'Solar House #156', amount: '5.2 kWh', price: '0.12 ETH' },
                  { user: 'Wind Farm #023', amount: '12.8 kWh', price: '0.28 ETH' },
                  { user: 'Community Solar', amount: '8.5 kWh', price: '0.18 ETH' },
                ].map((trade, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{trade.user}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{trade.amount}</p>
                    </div>
                    <span className="text-green-500 dark:text-green-400 font-medium">{trade.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
  </div>
);