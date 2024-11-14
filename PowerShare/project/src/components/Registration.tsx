import React, { useState } from 'react';
import { Shield, User, Mail, Home, X, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { generatePassword } from '../utils/auth';

interface RegistrationProps {
  onClose: () => void;
}

export default function Registration({ onClose }: RegistrationProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    energyType: '',
    capacity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const password = generatePassword();
      setGeneratedPassword(password);
      await register({
        ...formData,
        password,
        capacity: formData.capacity ? parseFloat(formData.capacity) : undefined,
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to PowerShare!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your account has been created successfully. Please save your login credentials:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">Email: {formData.email}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Password: {generatedPassword}</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              This password will only be shown once. Please save it securely.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            {step === 1 && 'Create Your Account'}
            {step === 2 && 'Energy Profile'}
            {step === 3 && 'Final Steps'}
          </h2>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Installation Address</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Home className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="pl-10 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Energy Source Type</label>
                <select
                  name="energyType"
                  value={formData.energyType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select type</option>
                  <option value="solar">Solar Panels</option>
                  <option value="wind">Wind Turbine</option>
                  <option value="hybrid">Hybrid System</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">System Capacity (kW)</label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300">
                  By completing registration, you agree to our Terms of Service and Privacy Policy.
                  Your login credentials will be provided on the next screen.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : step === 3 ? 'Complete Registration' : 'Continue'}
            </button>
          </div>
        </form>

        <div className="mt-4 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  step >= i ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}