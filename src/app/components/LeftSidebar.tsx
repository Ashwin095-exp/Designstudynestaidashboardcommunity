import { 
  Home, 
  LayoutDashboard, 
  Calendar, 
  CalendarClock, 
  FolderOpen, 
  FileText, 
  Link2, 
  CheckSquare, 
  BookOpen, 
  Settings 
} from 'lucide-react';
import { useState } from 'react';

export function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Calendar, label: 'Planner' },
    { icon: CalendarClock, label: 'Due Dates' },
    { icon: FolderOpen, label: 'Notes & Storage' },
    { icon: FileText, label: 'PDF Vault' },
    { icon: Link2, label: 'Important Links' },
    { icon: CheckSquare, label: 'Task Manager' },
    { icon: BookOpen, label: 'Study Planner' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="fixed left-0 top-[57px] h-[calc(100vh-57px)] w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
