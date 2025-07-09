
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingAIChat } from "./FloatingAIChat";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("FloatingChatButton rendered, isOpen:", isOpen);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Button clicked, current state:", isOpen);
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log("Chat closed");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleButtonClick}
            className="w-16 h-16 rounded-full shadow-2xl bg-construction-gold/90 hover:bg-construction-gold border-2 border-construction-gold/30 hover:border-construction-gold hover:shadow-construction-gold/25 transition-all duration-300 animate-pulse"
            type="button"
          >
            <MessageCircle className="h-8 w-8 text-construction-dark" />
          </Button>
          
          {/* Subtle Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-construction-gold/20 animate-ping"></div>
        </div>
      )}

      {/* AI Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <FloatingAIChat onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};
