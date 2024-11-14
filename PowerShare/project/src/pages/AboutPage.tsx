import React from 'react';
import { Sun, Wind, Leaf, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Revolutionizing Energy Trading Through
            <span className="text-green-500 block mt-2">Community Power</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            PowerShare is building the future of energy distribution by connecting communities
            and enabling peer-to-peer renewable energy trading.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in a future where communities can generate, share, and trade renewable
                energy directly with each other. Our platform empowers individuals to take control
                of their energy consumption while contributing to a sustainable future.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Sun className="h-6 w-6 text-yellow-500" />, text: 'Promote renewable energy adoption' },
                  { icon: <Wind className="h-6 w-6 text-blue-500" />, text: 'Reduce carbon emissions' },
                  { icon: <Leaf className="h-6 w-6 text-green-500" />, text: 'Build sustainable communities' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Solar panels"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How PowerShare Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: 'Generate',
                description: 'Install renewable energy systems and generate clean power',
                image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                icon: <Sun className="h-8 w-8 text-orange-500" />,
                title: 'Share',
                description: 'Connect with your community and share surplus energy',
                image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                icon: <Leaf className="h-8 w-8 text-green-500" />,
                title: 'Earn',
                description: 'Get rewarded for contributing to a sustainable future',
                image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10k+', label: 'Active Users' },
              { value: '50MW+', label: 'Energy Traded' },
              { value: '30%', label: 'Cost Savings' },
              { value: '15k+', label: 'CO₂ Reduced' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}