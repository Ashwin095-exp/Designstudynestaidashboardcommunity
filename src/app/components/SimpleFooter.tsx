export function SimpleFooter() {
  const links = ['About', 'Privacy', 'Contact', 'Help'];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SN</span>
            </div>
            <span className="font-semibold text-gray-900">StudyNest AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 StudyNest AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
