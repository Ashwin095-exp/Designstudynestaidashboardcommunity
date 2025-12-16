import { Search, Bell, User, Home, LayoutDashboard, Calendar, ChevronDown, FileText, Link2, Settings } from 'lucide-react';
import { useState } from 'react';

export function CommandTopBar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">SN</span>
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">StudyNest AI</span>
        </div>

        {/* Center - Navigation */}
        <nav className="flex items-center gap-1">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium">
            <Calendar className="w-4 h-4" />
            <span>Planner</span>
          </button>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              <span>More</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showMore && (
              <div className="absolute top-full mt-2 left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Due Dates</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">Notes & Storage</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Link2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Important Links</span>
                </button>
                <div className="border-t border-gray-200 my-1"></div>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right - Search, Notifications, Profile */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
