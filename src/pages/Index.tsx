
import React from 'react';
import { SubscriptionForm } from '@/components/SubscriptionForm';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen w-full bg-unsplash-bg bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <CardContent className="p-6 text-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">
              MARKETING INC.
            </h1>
            
            {/* Launch Date */}
            <p className="text-white/90 text-sm sm:text-base mb-2 text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Launching on {formattedDate}
            </p>
            
            {/* Description */}
            <p className="text-white/80 mb-6 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
              We're working hard to bring you an amazing marketing platform that will help your business grow. 
              Sign up to be notified when we launch!
            </p>
            
            {/* Subscription Form */}
            <SubscriptionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
