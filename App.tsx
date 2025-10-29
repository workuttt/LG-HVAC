import React from 'react';
import ChatWindow from './components/ChatWindow.tsx';

function App() {
  return (
    <main className="text-white min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900 animated-gradient">
      <div className="w-full max-w-3xl h-[95vh] sm:h-[90vh] flex flex-col bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-red-900/50 border border-slate-700/50">
        <header className="p-4 border-b border-slate-700/50 flex-shrink-0 bg-slate-900/50 rounded-t-2xl">
          <h1 className="text-xl sm:text-2xl font-semibold text-center tracking-wider">LG MEA AC Academy Expert Assistant</h1>
        </header>
        <ChatWindow />
      </div>
    </main>
  );
}

export default App;