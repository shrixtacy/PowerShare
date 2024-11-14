import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, LineChart, Wallet, Users, Lightbulb, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Battery className="h-8 w-8 text-green-500" />,
      title: 'Energy Marketplace',
      description: 'Trade surplus renewable energy directly with your community members.',
      link: '/market'
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-500" />,
      title: 'Real-Time Tracking',
      description: 'Monitor your energy production and consumption with detailed analytics.',
      link: '/analytics'
    },
    {
      icon: <Wallet className="h-8 w-8 text-purple-500" />,
      title: 'Secure Payments',
      description: 'Integrated wallet system for seamless energy trading transactions.',
      link: '/wallet'
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: 'Community Projects',
      description: 'Pool resources and invest in shared renewable energy initiatives.',
      link: '/community'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: 'Smart Optimization',
      description: 'AI-powered suggestions to maximize your energy efficiency.',
      link: '/analytics'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Secure Platform',
      description: 'Blockchain-based security for all your transactions and data.',
      link: '/wallet'
    },
  ];

  return (
    <div className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Empowering Communities</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to participate in the renewable energy revolution
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}