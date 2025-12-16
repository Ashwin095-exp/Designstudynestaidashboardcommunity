import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

export function MotivationCards() {
  const cards = [
    {
      icon: Brain,
      text: 'Study Smarter, Not Harder',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      text: 'Supercharge Your Learning with AI',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      text: 'Achieve Your Academic Goals',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      text: 'Track Progress, Stay Motivated',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="mt-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              <Icon className="w-10 h-10 mb-3 opacity-90" />
              <p className="font-semibold text-lg leading-snug">{card.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
