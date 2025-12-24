import { CommandTopBar } from './components/CommandTopBar';
import { AIVideoAssistant } from './components/AIVideoAssistant';
import { JarvisCore } from './components/JarvisCore';
import { YourDeadlines } from './components/YourDeadlines';
import { MotivationSections } from './components/MotivationSections';
import { ProductivityPanel } from './components/ProductivityPanel';
import { MinimalFooter } from './components/MinimalFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Command Top Bar */}
      <CommandTopBar />

      {/* Main 3-Column Layout */}
      <div className="pt-[57px]">
        <div className="grid grid-cols-12 min-h-[calc(100vh-57px)]">
          {/* LEFT - AI Video Assistant */}
          <div className="col-span-2 bg-white shadow-sm">
            <AIVideoAssistant />
          </div>

          {/* CENTER - Jarvis Core */}
          <div className="col-span-7">
            <JarvisCore />
          </div>

          {/* RIGHT - Your Notes */}
          <div className="col-span-3 bg-white shadow-sm">
            <YourDeadlines />
          </div>
        </div>

        {/* Lower Sections */}
        <div className="px-12 pb-8">
          {/* Motivation Sections */}
          <MotivationSections />

          {/* Feature Cards */}
          <ProductivityPanel />
        </div>
      </div>

      {/* Footer */}
      <MinimalFooter />
    </div>
  );
}
