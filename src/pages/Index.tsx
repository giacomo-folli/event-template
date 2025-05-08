
import React from 'react';
import { SubscriptionForm } from '@/components/SubscriptionForm';
import { ChatButton } from '@/components/ChatButton';
import { Link } from 'react-router-dom';

const Index = () => {
  // Calculate the launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  const formattedDate = launchDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen w-full bg-comingsoon bg-cover bg-center bg-clouds relative overflow-hidden">
      <div className="absolute inset-0 bg-comingsoon/40 backdrop-blur-[1px]"></div>
      
      {/* Home Link */}
      <div className="absolute top-8 left-8 z-10">
        <Link to="/" className="text-white hover:text-white/80 text-lg font-medium transition-colors">
          Home
        </Link>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Pre-title */}
          <p className="text-white/90 text-sm sm:text-base uppercase tracking-widest mb-2 animate-fade-in">
            WE ARE LAUNCHING OUR WEBSITE SOON.
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            MARKETING INC.
          </h1>
          
          {/* Launch Date */}
          <p className="text-white/90 text-lg sm:text-xl mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Launching on {formattedDate}
          </p>
          
          {/* Description */}
          <p className="text-white/80 max-w-lg mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We're working hard to bring you an amazing marketing platform that will help your business grow. 
            Sign up to be notified when we launch!
          </p>
          
          {/* Subscription Form */}
          <SubscriptionForm />
        </div>
      </div>
      
      {/* Chat Button */}
      <ChatButton />
    </div>
  );
};

export default Index;
