
import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedChatbot } from "./AnimatedChatbot";

export const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-105"
          >
            <Bot className="h-8 w-8 text-white" />
          </Button>
          
          {/* Simple pulse animation ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-30 animate-ping" />
        </div>
      )}

      {/* Animated Chatbot */}
      <AnimatedChatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};
