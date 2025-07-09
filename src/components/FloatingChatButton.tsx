
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingAIChat } from "./FloatingAIChat";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full shadow-2xl glass-effect-light border-2 border-construction-gold/30 hover:border-construction-gold hover:shadow-construction-gold/25 transition-all duration-300 animate-slow-pulse"
          >
            <MessageCircle className="h-8 w-8 text-construction-gold" />
          </Button>
          
          {/* Subtle Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-construction-gold/10" style={{
            animation: 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}></div>
        </div>
      )}

      {/* AI Chat Popup - Modified to be controlled */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] animate-slide-up">
          <FloatingAIChat onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};
