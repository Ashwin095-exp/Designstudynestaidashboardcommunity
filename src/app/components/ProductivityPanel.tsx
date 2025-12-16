import { Calendar, FileText, AlertCircle, Folder } from 'lucide-react';

export function ProductivityPanel() {
  const nodes = [
    {
      id: 1,
      type: 'deadline',
      title: 'Assignment Due',
      subtitle: 'Data Structures Project',
      time: 'Tomorrow, 11:59 PM',
      icon: Calendar,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      type: 'pdf',
      title: 'Reading Material',
      subtitle: 'Chapter 7 - Algorithms',
      time: '3 PDFs',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      type: 'alert',
      title: 'Exam Alert',
      subtitle: 'Midterm next week',
      time: 'Dec 22, 2025',
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      type: 'storage',
      title: 'Project Files',
      subtitle: 'Web Dev Assignment',
      time: '12 files',
      icon: Folder,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Productivity Dashboard</h2>
        <p className="text-gray-600 mt-1">Your tasks, deadlines, and resources</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${node.color} rounded-lg shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-blue-500 transition-colors"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{node.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{node.subtitle}</p>
              <p className="text-xs text-gray-500">{node.time}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
