import { Bot, Sparkles, Code, Palette, FlaskConical, BookOpen, Wand2 } from 'lucide-react';
import { useState } from 'react';

export function JarvisHero() {
  const [activeTab, setActiveTab] = useState('AI GPT Maker');

  const aiTools = [
    { name: 'AI GPT Maker', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Generator', icon: Wand2, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Designer', icon: Palette, color: 'from-orange-500 to-red-500' },
    { name: 'AI Experiment', icon: FlaskConical, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Code Experiment', icon: Code, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI Coding Tutorial', icon: BookOpen, color: 'from-violet-500 to-purple-500' }
  ];

  const outputs = [
    { title: 'Study Plan Generated', desc: 'Week 12 exam preparation schedule' },
    { title: 'Notes Summary', desc: 'Data Structures - Chapter 5' },
    { title: 'Code Solution', desc: 'Binary search implementation' }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section with Jarvis */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Jarvis – Your AI Study Assistant
            </h1>
            <p className="text-lg text-gray-600">
              Intelligent tools to enhance your learning experience
            </p>
          </div>

          {/* AI Robot Visual */}
          <div className="relative">
            <div className="w-32 h-32 relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Robot head */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Bot className="w-16 h-16 text-white" />
                
                {/* Eyes */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Neural network nodes */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {aiTools.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTab === tool.name;
            
            return (
              <button
                key={tool.name}
                onClick={() => setActiveTab(tool.name)}
                className={`group relative bg-white rounded-xl p-5 text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2 ${
                  isActive ? 'border-blue-500 shadow-lg' : 'border-transparent'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Outputs Section */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">AI Outputs</h2>
          <span className="text-sm text-gray-500">Generated results</span>
        </div>

        <div className="space-y-3">
          {outputs.map((output, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{output.title}</h3>
                <p className="text-sm text-gray-600">{output.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
