import React from 'react';
import { type ChatMessage } from '../types';
import { UserIcon, LgBotIcon } from './Icons';

interface ChatMessageProps {
  message: ChatMessage;
}

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, sender } = message;
  const isBot = sender === 'bot';

  const wrapperClasses = `flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`;
  const bubbleClasses = `max-w-xs md:max-w-md lg:max-w-lg rounded-3xl px-4 py-3 shadow-lg ${
    isBot ? 'bg-slate-600/80 text-slate-50 rounded-bl-none' : 'bg-slate-800 text-white rounded-br-none'
  }`;
  const iconWrapperClasses = `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${isBot ? 'bg-slate-800' : 'bg-slate-700'}`;

  const Icon = isBot ? LgBotIcon : UserIcon;

  const renderFormattedText = (textToFormat: string) => {
    // This regex captures either a URL or text wrapped in double asterisks for bolding.
    // Group 1: Captures the URL.
    // Group 3: Captures the content inside the asterisks.
    const regex = /(https?:\/\/[^\s"<>]+)|(\*\*([^*]+)\*\*)/g;

    // FIX: Replaced `(string | JSX.Element)[]` with `React.ReactNode[]` to fix "Cannot find namespace 'JSX'" error.
    const nodes: React.ReactNode[] = [];
    let lastIndex = 0;
    const matches = [...textToFormat.matchAll(regex)];

    matches.forEach((match, i) => {
      const url = match[1];
      const boldContent = match[3];

      // Add the plain text that comes before this match.
      if (match.index! > lastIndex) {
        nodes.push(textToFormat.substring(lastIndex, match.index));
      }

      // If it's a URL, create a link.
      if (url) {
        nodes.push(
          <a
            key={`link-${i}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 underline hover:text-red-300 transition-colors"
          >
            {url}
          </a>
        );
      // If it's bold text, create a strong tag.
      } else if (boldContent) {
        nodes.push(
          <strong key={`bold-${i}`} className="font-bold">
            {boldContent}
          </strong>
        );
      }

      lastIndex = match.index! + match[0].length;
    });

    // Add any remaining plain text after the last match.
    if (lastIndex < textToFormat.length) {
      nodes.push(textToFormat.substring(lastIndex));
    }

    // If there were no matches, return the original text.
    return nodes.length > 0 ? nodes : [textToFormat];
  };

  return (
    <div className={`${wrapperClasses} chat-message-enter`}>
      {isBot && (
        <div className={iconWrapperClasses}>
            <Icon />
        </div>
      )}
      <div className={bubbleClasses}>
        <p className="text-sm sm:text-base whitespace-pre-wrap">{renderFormattedText(text)}</p>
      </div>
       {!isBot && (
        <div className={iconWrapperClasses}>
            <Icon />
        </div>
      )}
    </div>
  );
};

export default ChatMessageComponent;