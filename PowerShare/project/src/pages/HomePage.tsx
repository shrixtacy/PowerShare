import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { useAuth } from '../contexts/AuthContext';

interface HomePageProps {
  onGetStarted: () => void;
}

export default function HomePage({ onGetStarted }: HomePageProps) {
  const { user } = useAuth();

  return (
    <main>
      <Hero onGetStarted={onGetStarted} isRegistered={!!user} />
      <Features />
    </main>
  );
}