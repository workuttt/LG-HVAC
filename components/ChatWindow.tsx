import React, { useState, useRef, useEffect } from 'react';
import { type ChatMessage as ChatMessageType } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import ChatMessage from './ChatMessage';
import LoadingBubble from './LoadingBubble';
import { SendIcon, VrfIcon, ScheduleIcon, SupportIcon } from './Icons';

interface SuggestionCardProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full sm:w-auto flex-1 bg-slate-800/80 hover:bg-slate-700/80 border border-red-500/30 hover:border-red-500/60 rounded-lg p-4 text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
  >
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="text-red-400">{icon}</div>
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  </button>
);

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChatStarted, setIsChatStarted] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendAndReceiveMessage = async (text: string) => {
     if (!text.trim()) return;

    const userMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!isChatStarted) setIsChatStarted(true);
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessageType = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessageType = {
        id: `error-${Date.now()}`,
        sender: 'bot',
        text: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    sendAndReceiveMessage(input);
    setInput('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendAndReceiveMessage(suggestion);
  };


  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!isChatStarted ? (
          <div className="flex flex-col justify-center items-center h-full animate-slideIn">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white">Welcome!</h2>
              <p className="text-slate-400">How can I assist you today?</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <SuggestionCard icon={<VrfIcon />} text="Ask About VRF" onClick={() => handleSuggestionClick('Tell me about LG VRF Systems.')} />
              <SuggestionCard icon={<ScheduleIcon />} text="View Course Schedule" onClick={() => handleSuggestionClick('What training courses are available?')} />
              <SuggestionCard icon={<SupportIcon />} text="Contact Support" onClick={() => handleSuggestionClick('How can I contact support?')} />
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && <LoadingBubble />}
          </>
        )}
         <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-slate-700/50 flex items-center space-x-2 flex-shrink-0 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 focus-within:scale-[1.01] focus-within:shadow-lg focus-within:shadow-red-800/30 rounded-b-2xl"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-full py-3 px-5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-red-600 hover:bg-red-700 disabled:bg-red-900/50 disabled:cursor-not-allowed text-white rounded-full p-3.5 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-red-500"
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;