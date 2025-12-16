import { BookOpen, Brain } from 'lucide-react';

export function FeatureCards() {
  const products = [
    {
      name: 'AI Study Companion',
      description: 'Your personal AI tutor that adapts to your learning style and pace. Get instant explanations, personalized study plans, and intelligent note-taking assistance.',
      icon: BookOpen,
      color: 'from-blue-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1640030896178-5139164d74e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGJvb2tzJTIwZGVza3xlbnwxfHx8fDE3NjU4MTI5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart Learning Analytics',
      description: 'Track your progress with AI-powered insights. Identify knowledge gaps, optimize study time, and receive personalized recommendations to maximize your academic performance.',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      image: 'https://images.unsplash.com/photo-1686984096026-23d6e82f9749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4NzQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="mt-20 mb-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Study-Based Products</h2>
        <p className="text-gray-600 mt-1">Everything you need to excel</p>
      </div>

      <div className="space-y-8">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <div
              key={product.name}
              className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                index === 1 ? 'ml-12' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div className={index === 1 ? 'md:order-2' : ''}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <div className={`relative h-64 rounded-xl overflow-hidden ${index === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}