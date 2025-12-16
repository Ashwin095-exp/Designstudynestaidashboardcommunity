import { Download, Save, Calendar, FileText, Lightbulb, Code } from 'lucide-react';

export function RightPanel() {
  const outputs = [
    {
      id: 1,
      type: 'Study Plan',
      title: 'Week 12 Study Schedule',
      content: 'Focused preparation for upcoming exams with balanced study sessions.',
      icon: Calendar,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      type: 'Notes',
      title: 'Data Structures Summary',
      content: 'Comprehensive notes on arrays, linked lists, trees, and graphs.',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 3,
      type: 'Insights',
      title: 'Study Tips',
      content: 'Pomodoro technique: 25-min focused work, 5-min breaks.',
      icon: Lightbulb,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 4,
      type: 'Code',
      title: 'Algorithm Explanation',
      content: 'Binary search implementation with time complexity O(log n).',
      icon: Code,
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900">AI Outputs</h2>
        <p className="text-sm text-gray-500 mt-1">Generated content and results</p>
      </div>

      {/* Outputs List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {outputs.map((output) => {
          const Icon = output.icon;
          return (
            <div
              key={output.id}
              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${output.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500">{output.type}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{output.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{output.content}</p>
                </div>
              </div>

              {/* Export Options */}
              <div className="flex gap-2 mt-3">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-md transition-colors">
                  <Save className="w-3 h-3" />
                  Save
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-md transition-colors">
                  <Download className="w-3 h-3" />
                  Export
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                  <Calendar className="w-3 h-3" />
                  Plan
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
