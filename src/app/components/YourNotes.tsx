import { useState } from 'react';
import { StickyNote, Plus, Calendar, FileText, AlertCircle, Folder } from 'lucide-react';

export function YourNotes() {
 const [noteInput, setNoteInput] = useState('');
const [notes, setNotes] = useState<
  { id: number; title: string; time: string }[]
>([]);

  const addNote = () => {
  if (noteInput.trim() === '') return;

  setNotes([
    {
      id: Date.now(),
      title: noteInput,
      time: 'Just now'
    },
    ...notes
  ]);

  setNoteInput('');
};



  const productivityItems = [
    { id: 1, type: 'deadline', title: 'Assignment Due', subtitle: 'Data Structures', time: 'Tomorrow', icon: Calendar, color: 'text-red-600 bg-red-50' },
    { id: 2, type: 'pdf', title: 'Reading Material', subtitle: 'Chapter 7', time: '3 PDFs', icon: FileText, color: 'text-blue-600 bg-blue-50' },
    { id: 3, type: 'alert', title: 'Exam Alert', subtitle: 'Midterm', time: 'Dec 22', icon: AlertCircle, color: 'text-yellow-600 bg-yellow-50' },
    { id: 4, type: 'storage', title: 'Project Files', subtitle: 'Web Dev', time: '12 files', icon: Folder, color: 'text-purple-600 bg-purple-50' }
  ];

  return (
    <div className="h-full bg-white border-l border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <StickyNote className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Your Notes</h3>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-all hover:scale-110">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <input
  type="text"
  value={noteInput}
  onChange={(e) => setNoteInput(e.target.value)}
  placeholder="Write a new note..."
  className="w-full mb-3 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
/>


        <div className="space-y-3 mb-6">
          {notes.map((note) => (
            <div
  key={note.id}
  className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
  onDoubleClick={() =>
    setNotes(notes.filter((n) => n.id !== note.id))
  }
>

              <p className="font-medium text-gray-900 text-sm mb-1">{note.title}</p>
              <p className="text-xs text-gray-500">{note.time}</p>
            </div>
          ))}

<button
  onClick={addNote}
  className="p-1.5 hover:bg-gray-100 rounded-lg transition-all hover:scale-110"
>

            + Add new note
          </button>
        </div>

        {/* Productivity Dashboard Merged */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-900 text-sm mb-4">Productivity</h4>
          <div className="space-y-2">
            {productivityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className={`p-2 rounded-lg ${item.color} flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.subtitle}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
