import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openTelegramBot = () => {
    try {
      // Open Telegram bot in new tab
      const telegramUrl = 'http://t.me/GreenlineStudio_bot';
      window.open(telegramUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback: Try to navigate directly
      window.location.href = 'http://t.me/GreenlineStudio_bot';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button - Direct to Telegram */}
      <button
        onClick={openTelegramBot}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center glow hover:rotate-12"
        aria-label="Chat with us on Telegram"
        type="button"
      >
        <Send className="h-6 w-6" />
      </button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-ping opacity-20"></div>

      {/* Hire Me Badge */}
      <button
        onClick={openTelegramBot}
        className="absolute -top-2 -left-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce hover:cursor-pointer"
      >
        Hire Me!
      </button>
    </div>
  );
};

// Add custom animations to index.css
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
`;
document.head.appendChild(style);

export default FloatingContact;