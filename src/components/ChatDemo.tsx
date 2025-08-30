import { useState, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi! I\'m your AI Assistant. What can I help you with today?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoResponses = [
    'I can help you with research, writing, scheduling, and much more!',
    'Let me analyze that for you and provide a comprehensive solution.',
    'Great question! Here\'s what I found and my recommendations...',
    'I\'ve completed that task. Would you like me to help with anything else?'
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      text: inputValue
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        type: 'bot' as const,
        text: demoResponses[Math.floor(Math.random() * demoResponses.length)]
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Try It Out
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience how easy it is to interact with your AI Assistant
          </p>
        </div>

        {/* Chat Interface */}
        <div className="card-gradient rounded-2xl p-6 max-w-2xl mx-auto">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'bot' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {message.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.type === 'bot'
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-gradient-to-r from-primary to-accent text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;