
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

export const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "We'll notify you when we launch.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <Input
        type="email"
        placeholder="Enter your email here *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border-white/30 focus:border-white text-sm"
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-comingsoon-button hover:bg-comingsoon-button/90 text-white font-medium text-sm"
      >
        Notify Me!
      </Button>
    </form>
  );
};
