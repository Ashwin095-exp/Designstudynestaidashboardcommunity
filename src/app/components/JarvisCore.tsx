import { Image, Presentation, Code, Video, GraduationCap, Mic, Send } from 'lucide-react';
import { useState } from 'react';
import robotAssistant from "../../assets/Virtual-AI-assistant-removebg-preview.png";



export function JarvisCore() {
  const [input, setInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const capabilities = [
    { name: 'PPT Maker', icon: Presentation },
    { name: 'Image Gen', icon: Image },
    { name: 'Designer', icon: Image },
    { name: 'Code Helper', icon: Code },
    { name: 'Video Edit', icon: Video },
    { name: 'Tutor', icon: GraduationCap }
  ];

  return (
    <div className="h-full bg-gradient-to-b from-gray-50 to-white">
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jarvis</h1>
          <p className="text-gray-600">Your AI Study Companion</p>
        </div>

        {/* Capability Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <button
                key={cap.name}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
                {cap.name}
              </button>
            );
          })}
        </div>

        {/* ROBOT AI ASSISTANT VISUAL */}
        <div className="flex items-center justify-center mb-12">
          <img 
            src={robotAssistant} 
            alt="Jarvis AI Assistant" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-52 h-auto object-contain transition-all duration-500 ${
              isHovered ? 'scale-105' : 'animate-float'
            }`}
            style={{
              filter: isHovered ? 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.15))' : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.04))'
            }}
          />
        </div>

        {/* Interaction Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <button className="p-3 hover:bg-gray-100 rounded-xl transition-all hover:scale-105">
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Jarvis anything..."
                className="flex-1 px-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
