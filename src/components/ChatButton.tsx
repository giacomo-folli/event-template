
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export const ChatButton = () => {
  const handleChatClick = () => {
    toast({
      title: "Chat functionality coming soon!",
      description: "Our team will be available to chat once we launch.",
    });
  };

  return (
    <Button 
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 bg-comingsoon-button hover:bg-comingsoon-button/90 text-white py-6 px-6 rounded-md font-medium shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      Let's Chat!
    </Button>
  );
};
