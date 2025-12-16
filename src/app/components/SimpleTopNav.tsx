import { Search, ChevronDown } from 'lucide-react';

export function SimpleTopNav() {
  const navItems = ['Home', 'Dashboard', 'Planner', 'Settings'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SN</span>
          </div>
          <span className="font-bold text-xl text-gray-900">StudyNest AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right Side - Search + Filter */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">All</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
