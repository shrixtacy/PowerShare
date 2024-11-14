import React from 'react';
import { Users, Target, Award, MessageSquare } from 'lucide-react';

export default function CommunityPage() {
  const projects = [
    {
      title: 'Community Solar Farm',
      description: 'Joint investment in a 500kW solar installation',
      progress: 75,
      participants: 48,
      raised: '125 ETH',
      goal: '150 ETH',
    },
    {
      title: 'Wind Turbine Network',
      description: 'Expanding our wind energy capacity',
      progress: 40,
      participants: 32,
      raised: '80 ETH',
      goal: '200 ETH',
    },
  ];

  const discussions = [
    {
      title: 'Energy Storage Solutions',
      author: 'Sarah Chen',
      replies: 24,
      lastActive: '2h ago',
    },
    {
      title: 'Optimizing Solar Panel Placement',
      author: 'Michael Roberts',
      replies: 18,
      lastActive: '4h ago',
    },
    {
      title: 'Community Grid Maintenance',
      author: 'David Kim',
      replies: 31,
      lastActive: '1h ago',
    },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Start New Project
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Active Projects */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
              <Target className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {project.participants} participants
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-600">Raised: {project.raised}</span>
                      <span className="text-gray-600">Goal: {project.goal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Discussions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
              <MessageSquare className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{discussion.title}</h3>
                    <p className="text-sm text-gray-600">
                      by {discussion.author} · {discussion.lastActive}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="text-sm">{discussion.replies}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full text-green-500 px-4 py-2 rounded-lg border border-green-500 hover:bg-green-50 transition-colors">
              View All Discussions
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Users className="h-8 w-8 text-blue-500" />, label: 'Active Members', value: '1,234' },
            { icon: <Target className="h-8 w-8 text-green-500" />, label: 'Projects Completed', value: '45' },
            { icon: <Award className="h-8 w-8 text-yellow-500" />, label: 'Total Impact', value: '500 MWh' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-50 rounded-lg p-3">{stat.icon}</div>
                <div>
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}