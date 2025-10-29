
import React from 'react';
import { LgBotIcon } from './Icons';

const LoadingBubble: React.FC = () => {
  return (
    <div className="flex items-start gap-3 justify-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-slate-800">
        <LgBotIcon />
      </div>
      <div className="max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-4 text-white bg-slate-600 rounded-bl-none flex items-center space-x-1.5 shadow-md">
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </div>
  );
};

export default LoadingBubble;