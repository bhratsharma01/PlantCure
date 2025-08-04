import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am PlantCure Assistant 🌿. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const botMessage = { from: 'bot', text: generateBotReply(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const generateBotReply = (input) => {
    const msg = input.toLowerCase();

    const greetings = ['hi', 'hello', 'hey'];
    const diseaseKeywords = ['disease', 'symptom', 'infection', 'diagnose', 'plant issue'];
    const careKeywords = ['water', 'sunlight', 'fertilizer', 'soil', 'care'];

    if (greetings.some(word => msg.includes(word))) {
      return "Hello! 👋 How can I assist you today?";
    }

    if (diseaseKeywords.some(word => msg.includes(word))) {
      return "It looks like you're asking about plant diseases. Try using the Diagnose feature to identify issues.";
    }

    if (careKeywords.some(word => msg.includes(word))) {
      return "Plant care is important 🌱. Make sure to provide adequate water, sunlight, and soil nutrients!";
    }

    return "I'm still learning! Try asking about plant care, diseases, or say hello.";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">🌿 PlantCure Chatbot</div>

      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
