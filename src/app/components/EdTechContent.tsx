import { Brain, Target, Zap, TrendingUp } from 'lucide-react';

export function EdTechContent() {
  const tips = [
    {
      id: 1,
      icon: Brain,
      title: 'Active Recall',
      description: 'Test yourself frequently instead of passive re-reading. This strengthens memory and retention.',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Target,
      title: 'Set SMART Goals',
      description: 'Make your study goals Specific, Measurable, Achievable, Relevant, and Time-bound.',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Pomodoro Power',
      description: 'Work in 25-minute focused sprints with 5-minute breaks. Boost productivity and prevent burnout.',
      color: 'bg-green-500'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Consistent Progress',
      description: 'Small daily improvements compound over time. 1% better each day = 37x better in a year!',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Study Smarter, Not Harder</h2>
        <p className="text-gray-600 mt-1">Evidence-based learning strategies for academic success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${tip.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
